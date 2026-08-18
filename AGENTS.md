# AGENTS.md

Teaching repo for a p5.js / web-development summer course. Every `weekNN/<day>/` folder is a self-contained set of static HTML/CSS/JS exercises. No package.json, no build system, no tests, no lint.

## Verification
- There is no npm/test/lint/build tooling — don't invent commands. Verify by opening the `.html` file in a browser, or serve the folder with `python3 -m http.server`.
- p5.js is always loaded from a vendored local copy next to the exercise (`./p5.min.js` or `./js/p5.min.js`), never from a CDN. Reuse an existing copy rather than adding new ~1MB `p5.min.js` files.

## Structure & conventions
- `weekNN/{monday,tuesday,thursday,friday}/` — one folder per lesson day; exercises are `exNN.html` (+ matching `.css`/`.js`). Keep each day independent; do not introduce shared modules or cross-day imports.
- `project/` — a separate Firebase Hosting site, unrelated to the weekly exercises. Deploy only from `project/` via `firebase deploy` (config: `project/firebase.json`, `.firebaserc`). The deployed site root is `project/public/`; `project/draw/` is a standalone app that is not part of the deployed site.
- Root `README.md` is intentionally a one-line stub — don't expand it.

## Git
- Single `main` branch pushed straight to origin; no PR flow. Every existing commit uses the message "Update summer course materials".
- Root has no `.gitignore`; tracked vendored `p5.min.js` copies are inconsistent across folders (e.g. `week5/thu/js/` is tracked, `week07/tuesday/` is not).