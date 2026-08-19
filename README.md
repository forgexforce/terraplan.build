# TerraPlan — website

Static marketing site for TerraPlan. No build step, no dependencies: the
contents of `public/` are exactly what ships.

```
public/          the site itself (HTML, CSS, JS, SVG assets)
brand/           brand guide, voice, mission, logo source files — not deployed
infra/           CloudFormation template + bootstrap script
.github/         deploy workflow
```

## Run it locally

```sh
cd public && python3 -m http.server 8080
```

Then open <http://127.0.0.1:8080>.

## How deploys work

Push to `main` touching anything under `public/` and GitHub Actions publishes
the site. The workflow assumes an AWS IAM role through OIDC — there are no
long-lived AWS keys in GitHub — then syncs `public/` to S3 and invalidates the
CloudFront cache.

Because filenames are not content-hashed, HTML is uploaded with
`max-age=0, must-revalidate` and other assets with `max-age=3600`. Every deploy
invalidates `/*`, so the edge is always current.

## Infrastructure

`infra/site.yaml` follows the same pattern as the other static sites in this
AWS account (`continuity`, `maru`, `forgeforce`):

- **S3** — private bucket, all public access blocked, encrypted at rest
- **CloudFront** — the only way in, via an Origin Access Identity
- **ACM** — certificate for the apex and `www`, DNS-validated through Route 53
- **Route 53** — A and AAAA alias records for both hostnames
- **IAM** — a deploy role trusted *only* by `forgexforce/terraplan.build` via OIDC

A CloudFront Function handles canonicalisation at the edge: `www` 301s to the
apex, trailing slashes are stripped, and extensionless paths resolve to their
`index.html`.

### First-time setup

1. Delegate `terraplan.build` to Route 53. ACM validates over public DNS, so
   the certificate cannot issue until the registrar points at the zone's
   nameservers.
2. Deploy the stack:
   ```sh
   ./infra/deploy-stack.sh
   ```
3. Store the role ARN the script prints as the `AWS_DEPLOY_ROLE_ARN` secret on
   the repo.

After that, deploys are just pushes to `main`.

### Changing the infrastructure

Edit `infra/site.yaml` and re-run `./infra/deploy-stack.sh` — it is idempotent
and applies a changeset.
