#!/usr/bin/env bash
# One-time (and idempotent) deploy of the TerraPlan site infrastructure.
# Re-run safely after editing infra/site.yaml to apply changes.
set -euo pipefail

STACK_NAME="${STACK_NAME:-terraplan}"
DOMAIN="${DOMAIN:-terraplan.build}"
ZONE_ID="${ZONE_ID:-Z06909163NR2EBQLDLXW1}"
GITHUB_ORG="${GITHUB_ORG:-forgexforce}"
GITHUB_REPO="${GITHUB_REPO:-terraplan.build}"
GITHUB_ORG_ID="${GITHUB_ORG_ID:-106042137}"         # gh api users/forgexforce --jq .id
GITHUB_REPO_ID="${GITHUB_REPO_ID:-1340102053}"      # gh api repos/forgexforce/terraplan.build --jq .id
REGION="${AWS_REGION:-us-east-1}"   # must be us-east-1: CloudFront requires the cert there

cd "$(dirname "$0")/.."

# ACM validates over public DNS, so the zone must actually be authoritative first.
echo "Checking DNS delegation for ${DOMAIN}..."
expected_ns=$(aws route53 get-hosted-zone --id "$ZONE_ID" \
  --query 'DelegationSet.NameServers[0]' --output text)
live_ns=$(dig +short NS "$DOMAIN" @8.8.8.8 | sed 's/\.$//' | sort | tr '\n' ' ')

if [[ "$live_ns" != *"${expected_ns%%.*}"* ]]; then
  echo
  echo "  WARNING: ${DOMAIN} is not delegated to this Route 53 zone yet."
  echo "  Live nameservers: ${live_ns:-<none>}"
  echo "  Expected to include: ${expected_ns}"
  echo
  echo "  ACM cannot validate the certificate until delegation propagates,"
  echo "  and the stack will sit in CREATE_IN_PROGRESS until it does."
  echo
  read -r -p "  Continue anyway? [y/N] " reply
  [[ "$reply" =~ ^[Yy]$ ]] || { echo "Aborted."; exit 1; }
fi

OIDC_PROVIDER=$(aws cloudformation describe-stacks \
  --stack-name github-oidc \
  --query "Stacks[0].Outputs[?OutputKey=='Provider'].OutputValue" \
  --output text --region "$REGION")

echo "Deploying stack '${STACK_NAME}' to ${REGION}..."
aws cloudformation deploy \
  --stack-name "$STACK_NAME" \
  --template-file infra/site.yaml \
  --region "$REGION" \
  --capabilities CAPABILITY_IAM \
  --no-fail-on-empty-changeset \
  --parameter-overrides \
    ZoneId="$ZONE_ID" \
    Domain="$DOMAIN" \
    GithubIdentityProvider="$OIDC_PROVIDER" \
    GithubOrgName="$GITHUB_ORG" \
    GithubRepositoryName="$GITHUB_REPO" \
    GithubOrgId="$GITHUB_ORG_ID" \
    GithubRepositoryId="$GITHUB_REPO_ID"

echo
echo "Stack outputs:"
aws cloudformation describe-stacks --stack-name "$STACK_NAME" --region "$REGION" \
  --query 'Stacks[0].Outputs[].{Key:OutputKey,Value:OutputValue}' --output table

ROLE_ARN=$(aws cloudformation describe-stacks --stack-name "$STACK_NAME" --region "$REGION" \
  --query "Stacks[0].Outputs[?OutputKey=='GithubRole'].OutputValue" --output text)

echo
echo "Next: store the role ARN as a GitHub secret so the workflow can assume it."
echo
echo "  gh secret set AWS_DEPLOY_ROLE_ARN \\"
echo "    --repo ${GITHUB_ORG}/${GITHUB_REPO} \\"
echo "    --body '${ROLE_ARN}'"
