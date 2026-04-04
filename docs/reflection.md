# Reflection

## 1. How did you structure your JavaScript?

Before arriving at this implementation I built versions of this portfolio in React and Svelte. Both frameworks handle structure naturally through components and reactive state, so moving to vanilla JavaScript required a deliberate shift in how that structure was achieved without those tools.

The approach I landed on organizes the code into four layers. At the top, plain data arrays (`projects`, `skills`) act as the single source of truth for all rendered content. Below that, dedicated render functions (`renderProjects`, `renderSkills`, `renderRepos`) each own one section of the DOM and are called once on load. A third layer handles interactivity through focused, single-purpose functions (`initCarousels`, `initDarkMode`, `initAudio`, `initSplash`) that wire up event listeners after the DOM is populated. Everything is kicked off at the bottom by a flat sequence of function calls rather than a single `init()` wrapper, which keeps the startup flow readable.

This mirrors how a framework organizes code — data, render, events, init — without relying on one.

## 2. How does your portfolio demonstrate the course outcomes?

**Outcome 1 - JavaScript Proficiency:** All content is stored in structured JavaScript arrays of objects rather than hardcoded HTML. Application logic handles sorting, filtering, shuffling, and state management entirely in JS.

**Outcome 2 - DOM Manipulation:** No section of the portfolio is static. Projects, skills, and GitHub repos are all created programmatically using `document.createElement` and `appendChild`. UI updates in response to user interaction throughout — carousel navigation, dark mode toggle, mute/volume controls, and the splash screen dismissal all manipulate the DOM directly via event listeners.

**Outcome 3 - API Integration:** The GitHub section fetches live repository data using the GitHub REST API, parses the JSON response, and renders the results as cards. Loading, error, and empty states are all handled so the UI responds appropriately regardless of the API result.

**Outcome 5 - Tailwind CSS / UI / UX:** The portfolio uses Tailwind CSS v4 via the standalone CLI. Layout is fully responsive from mobile through desktop. A custom `@theme` block registers display and body font families, and a `@custom-variant` rule enables the dark mode variant tied to a class toggle rather than a media query.

## 3. What challenges did you face?

The most concrete challenge was browser autoplay policy. Audio cannot start without a prior user gesture, which meant the background music could not simply begin on page load. The solution was a splash screen that requires a click to enter the portfolio, which both satisfies the browser requirement and gives the audio a natural entry point.

Working without a framework also means there is no automatic re-rendering when data changes. Every update to the DOM has to be triggered explicitly, which required thinking carefully about when and where to call render functions rather than relying on reactive state to handle it automatically.

## 4. What would you improve?

The GitHub API section exists to satisfy a course outcome and it shows — it sits somewhat disconnected from the rest of the portfolio's purpose. In a future iteration I would either remove it or integrate it more meaningfully, perhaps by cross-referencing repos with the projects already listed rather than displaying them as a separate standalone section.

The contact form currently uses Netlify Forms, which only works when deployed to Netlify. Since this project is deployed to GitHub Pages the form submission does nothing in production. A proper improvement would be wiring it to a form service like Formspree or a lightweight serverless function.

Longer term, as the portfolio shifts toward representing a service business rather than just a student project, the structure and content would need a significant rethink — less emphasis on academic work and more on client outcomes, services offered, and professional credibility.
