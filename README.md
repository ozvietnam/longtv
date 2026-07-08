# LONGTV

Investment consulting company planning repository — helping Chinese factories relocate production to **Thái Nguyên** and **Hải Phòng**, Vietnam.

## Repository Status

**Phase 1 — Project Planning.** This repo currently holds business planning documents. A lightweight docs site renders the planning content for local preview.

| Component | Description |
| --- | --- |
| Planning docs | `01-project-structure/` — business problem trees and strategy |
| Docs site | VitePress — local preview of planning markdown |

## Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) 20 LTS or newer (see `.nvmrc`)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/ozvietnam/longtv.git
cd longtv

# Install dependencies
npm install

# Start the docs dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the planning site.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start VitePress dev server with hot reload |
| `npm run build` | Build static site to `.vitepress/dist` |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
longtv/
├── 01-project-structure/     # Business planning documents
│   └── 00-MACRO_PROBLEMS.md  # Macro problem tree (V1–V7)
├── .vitepress/               # VitePress site configuration
├── index.md                  # Docs site home page
├── package.json
└── README.md
```

## Contributing Planning Docs

1. Add or edit markdown files under `01-project-structure/`
2. Register new pages in `.vitepress/config.ts` sidebar if needed
3. Run `npm run dev` to preview changes locally

## Remote

- Repository: https://github.com/ozvietnam/longtv
- Default branch: `main`
