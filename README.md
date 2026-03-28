![Banner](./assets/banner.svg)

# aigc-visual-workflows

[Chinese Version](./README_zh.md)

This repository is where I organize structured AIGC workflow definitions for visual production.

I use it to keep workflow ideas readable: what the workflow is for, what inputs it expects, which stack it relies on, and what quality checks matter before I consider the result usable.

## What is inside

- a small static site that presents workflow categories
- workflow specs under `workflows/`
- a validation script that checks every workflow file for required fields
- a simple structure for documenting stack choices and QA logic

## Current workflow themes

- product detail imagery
- lookbook and scene building
- brand storyboard planning

## Why I keep workflows this way

AI visual work becomes hard to reuse when it only exists as screenshots, node screenshots, or scattered notes. I prefer a structure that makes each workflow easy to revisit:

- define the purpose
- list the inputs clearly
- record the model and node stack
- write down the quality checks
- keep workflows grouped by output type

## Command

```bash
npm run validate:workflows
```

## Repository structure

- `workflows/` workflow specs in JSON
- `scripts/validate-workflows.mjs` schema-like validation for workflow files
- `index.html`, `styles.css`, `app.js` static site for browsing workflow categories

## Next directions

- add more workflow families as production needs grow
- attach preview assets that are safe to share
- expand model routing and post-processing notes
- keep the workflow files consistent enough to be searchable and reusable

## License

MIT
