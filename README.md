# Midwest Chemicals

A website for a chemicals and refinishing supplier, built using React and TypeScript.

## What's built so far

- A responsive site header with the brand mark and primary navigation
- A mobile menu that:
  - opens and closes from a hamburger button, which animates into an "X"
  - closes when the Escape key is pressed, returning focus to the button
  - closes when a navigation link is clicked
  - reports its state to screen readers with `aria-expanded`
- A home page hero and a site footer
- Client-side routing with a page title for each route
- A Products page of category cards, where each card links to its own category page at `/products/<category>`
- A "not found" view for unknown pages and categories
- A charcoal and teal color palette defined once as CSS variables
- Placeholder copy and product data, to be replaced with real content before launch

## Tech stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) 7 for client-side routing
- [Vite](https://vite.dev/) for the dev server and build
- Plain CSS, with BEM-style class names (`site-header__nav-link`)

## Getting started

You need [Node.js](https://nodejs.org/) installed. Then:

```bash
npm install
npm run dev
```

Open the local address Vite prints in the terminal (usually `http://localhost:5173`). Changes you save show up in the browser right away.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with live reload |
| `npm run build` | Type-checks the project and creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |

## Project structure

```text
src/
  main.tsx       Entry point that mounts the app inside the router
  App.tsx        Page layout and the list of routes
  index.css      Global styles and the color palette (CSS variables)
  components/    Reusable pieces, each with its own .css file
                 (Header, Footer, Hero, CategoryCard, CatalogProductCard)
  pages/         One component per route
                 (HomePage, ProductsPage, CategoryPage, NotFoundPage)
  data/          Content and the navigation list
                 (catalog.json, catalog.ts, navigation.ts)
  utils/         Small helpers (pageTitle.ts)
```

## Development Approach
This project uses AI as a development and learning tool. I review and test the code, complete selected tasks myself, and make the final decisions on design, accessibility, and behavior.
