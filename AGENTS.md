# AGENTS.md

## Project

Personal website for Damian Hryniuk.

Repository: `IdmaDH/damian-hryniuk-site`

Production: `https://damianhryniuk.pl`

Development preview: `https://dev.damianhryniuk.pl`

## Branch workflow

- `dev` is the working branch.
- `main` is production.
- Perform normal development work only on `dev`.
- Never switch to, commit to, merge into, or push to `main` unless Damian explicitly asks to publish to production.
- Before starting work, make sure the working copy is based on the latest `origin/dev`.
- Do not overwrite or discard unrelated changes.

## Changes

- Change only what was requested.
- Preserve existing design language, responsive behavior, interactions, accessibility, and working functionality unless the task explicitly requires changing them.
- Keep the current Astro architecture unless a task requires otherwise.
- Avoid unnecessary dependencies and broad refactors.
- Preserve existing assets and filenames unless the task explicitly requires replacing them.

## Validation

- After code changes, run `npm run build`.
- Do not publish a change if the build fails.
- When working locally, inspect the diff before committing.
- Use clear, focused commit messages.

## Deployment

- A push to `dev` triggers the Cloudflare development preview.
- Review changes at `https://dev.damianhryniuk.pl`.
- Production is updated only after Damian explicitly approves the DEV version and asks to publish it.
