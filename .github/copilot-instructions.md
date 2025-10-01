# Copilot Instructions for AI Coding Agents

## Project Overview

- This is a Next.js app using the `/src/app` directory structure and TypeScript.
- Pages are organized as folders under `src/app/`, each with its own `page.tsx` (e.g., `src/app/kontakt/page.tsx`).
- Global styles are in `src/app/globals.css`.
- Static assets (SVGs, icons) are in `public/`.
- The project was bootstrapped with `create-next-app` and uses Next.js 13+ app directory conventions.

## Developer Workflows

- **Start dev server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Main entry point:** `src/app/page.tsx` (edit to change homepage)
- **Global layout:** `src/app/layout.tsx` wraps all pages
- **Global styles:** `src/app/globals.css`
- **TypeScript config:** `tsconfig.json`
- **Next.js config:** `next.config.ts`
- **ESLint config:** `eslint.config.mjs`
- **PostCSS config:** `postcss.config.mjs`

## Patterns & Conventions

- **Routing:** Each folder under `src/app/` is a route; `page.tsx` is the entry for that route.
- **No custom API routes or server components detected.**
- **Font loading:** Uses `next/font` for optimized font loading (see README).
- **SVGs and images:** Place in `public/` and reference with `/filename.svg`.
- **No test or build scripts beyond Next.js defaults.**
- **No custom state management or external service integration detected.**

## Examples

- To add a new page: create a folder under `src/app/your-page/` and add `page.tsx`.
- To update global layout: edit `src/app/layout.tsx`.
- To add static assets: place files in `public/` and reference by path.

## External Dependencies

- Next.js, React, TypeScript
- No custom backend, database, or API integration found

## How to Be Productive

- Follow Next.js app directory conventions for routing and layouts.
- Use TypeScript for all code in `src/`.
- Reference global styles and layout for shared UI.
- Use static assets from `public/`.
- Start with `src/app/page.tsx` and expand routes as needed.

---

If any conventions or integrations are unclear, ask the user for clarification or examples from their codebase.
