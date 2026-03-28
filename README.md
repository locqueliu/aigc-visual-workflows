![Banner](./assets/banner.svg)

# aigc-visual-workflows

A public-safe showcase for structured AIGC image workflows.

This repo is designed as a clean reference for people who want to present AI-assisted visual systems on GitHub without exposing client assets, internal prompts, or proprietary nodes.

## What is inside

- a static microsite to explain workflow categories
- JSON workflow definitions under `workflows/`
- a Node validation script for keeping the workflow files consistent
- a reusable structure for documenting prompt systems and QA logic

## Why this repo is useful

Creative AI work often gets trapped inside screenshots, chat logs, or unnamed folders. This project shows a cleaner alternative:

- define the workflow purpose
- list the inputs clearly
- document the generation stack
- write down quality gates
- keep outputs grouped by use case

## Commands

```bash
npm run validate:workflows
```

## Suggested extensions

- add your own workflow categories
- add preview images that are safe to publish
- add a model routing matrix
- attach post-production checklists for real projects
- deploy the static site with GitHub Pages

## Public-safe rule

Do not put private campaign images, confidential briefs, closed-source node files, API keys, or customer material into this repo.

## License

MIT
