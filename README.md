# Midwest Chemicals

A practice website for a fictional chemicals and refinishing supplier, built to learn React and TypeScript.

## What's built so far

- A responsive site header with the brand mark and primary navigation
- A mobile menu that:
  - opens and closes from a hamburger button, which animates into an "X"
  - closes when the Escape key is pressed, returning focus to the button
  - closes when a navigation link is clicked
  - reports its state to screen readers with `aria-expanded`

## Tech stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
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
outputs/
  Header.tsx   The header component and mobile menu logic
  Header.css   Header styles, including the mobile layout
src/
  App.tsx      Top-level component
  main.tsx     Entry point that mounts the app
  index.css    Global styles
```

## Development Approach
This project uses AI as a development and learning tool. I review and test the code, complete selected tasks myself, and make the final decisions on design, accessibility, and behavior.
