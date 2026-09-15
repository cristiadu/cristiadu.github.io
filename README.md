# Cristiano Faustino's Portfolio

[![CI](https://github.com/cristiadu/cristiadu.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/cristiadu/cristiadu.github.io/actions/workflows/ci.yml)
[![CD](https://github.com/cristiadu/cristiadu.github.io/actions/workflows/cd.yml/badge.svg)](https://github.com/cristiadu/cristiadu.github.io/actions/workflows/cd.yml)

This is the source code for the personal portfolio published at <https://cristianofaustino.me>.

## Tech Stack

- **React 19** with functional components and hooks
- **Webpack** for bundling
- **Vitest** for unit testing
- **Playwright** for E2E and visual regression testing
- **pnpm** for package management

## Getting Started

```bash
pnpm install
pnpm start
```

## Content Admin

Open [Portfolio Admin](https://cristianofaustino.me/admin/) and choose **Sign In Using Access Token**.
Follow the token creation link in the login dialog. Select `cristiadu/cristiadu.github.io`
and grant **Contents: Read and write** using an account with write access to the repository.
Enter the token only in the login dialog; never put it
in the repository or CMS configuration. No OAuth service is required.

Under **Portfolio**, choose **Career and Projects**, **Skills**, or **Education**. Add, edit,
remove, or reorder list items, then publish. Publishing commits the JSON file to `main`,
triggering the existing build and deployment workflow. The public site updates after that
workflow succeeds. Repository branch rules still apply to these commits.

The preview pane renders the real portfolio components and stylesheet, so unsaved edits
appear in the published layout before you commit them.

- Descriptions use HTML, not Markdown.
- Image paths are relative to `public/images`, such as `projects/giftbit.png` or
  `skills/java.png`. Upload images through the asset library if needed, then enter their
  relative paths in the content form.
- Leave years of experience empty when it does not apply, and leave **Initially Expanded**
  empty for collapsed career entries.
- Content changes can affect the existing screenshot checks. Snapshots are per platform and
  CI compares the Linux ones, which `pnpm run test:e2e:update` does not produce on macOS. For
  an intended visual change, run the **Update Playwright Screenshots** workflow on the branch
  and merge the pull request it opens. Tests are not bypassed by the admin.
- Git history records content changes; revert a content commit to undo a published edit.

For local development, run `pnpm start` and open `/admin/`. Token login still edits the remote
repository; use Sveltia's local repository mode when working on local files.

The editor is pinned in `public/admin/index.html` with a matching Subresource Integrity hash.
When upgrading Sveltia, update both the script version and the hash:

```bash
curl -sL https://unpkg.com/@sveltia/cms@<version>/dist/sveltia-cms.js | openssl dgst -sha384 -binary | openssl base64 -A
```

## History

Originally built in 2014 with jQuery, Bootstrap, and AngularJS. Migrated to React in 2024 with a custom newspaper-inspired design.

The app loads career and skills data from JSON files, making content updates simple without source code changes.
