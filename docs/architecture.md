# Architecture

## File Structure

```
portfolio-vanilla/
├── index.html          # Single HTML file, section containers only
├── src/
│   ├── main.js         # All application logic
│   └── input.css       # Tailwind source CSS
├── dist/
│   └── output.css      # Compiled Tailwind output (generated)
├── images/             # Project screenshots, headshot, favicon
├── audio/              # Background music tracks (song01-04.mp3)
└── docs/
    ├── architecture.md
    └── reflection.md
```

## Data Flow

All content data lives at the top of `src/main.js` as plain JavaScript arrays:

```
projects[]  ->  renderProjects()  ->  #projects-grid
skills[]    ->  renderSkills()    ->  #skills-grid
```

GitHub data flows asynchronously:

```
loadRepos() -> fetch GitHub API -> parse JSON -> renderRepos() -> #github-grid
```

User interaction flows through state and event listeners:

```
User click/input -> event listener -> update state or DOM -> visual change
```

## Rendering Approach

`index.html` contains no content — only structural containers with IDs. JavaScript owns all rendering.

Each render function follows the same pattern:
1. Get the target container by ID
2. Loop over a data array
3. Create a DOM element with `document.createElement`
4. Set its content via `innerHTML` or `textContent`
5. Append it to the container with `appendChild`

The carousel is built as an HTML string inside `createCarouselHTML()`, injected via `innerHTML` into each project card, then `initCarousels()` queries all `[data-carousel]` elements after render and wires up click events.

Dark mode uses `localStorage` to persist the user's preference and toggles a `dark` class on the `<html>` element, which Tailwind's dark variant responds to via a custom `@custom-variant` rule.

The audio system uses a single `HTMLAudioElement`, a shuffled playlist array, and the `ended` event to advance tracks automatically.
