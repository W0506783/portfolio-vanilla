# Dylan MacKinnon - Portfolio

A professional developer portfolio built as a client-side web application using vanilla JavaScript, DOM manipulation, Tailwind CSS v4, and GitHub Pages.

## Features

- Data-driven project and skills rendering via JavaScript arrays
- Image carousel on each project card
- Live GitHub repository data via the GitHub API
- Dark mode with localStorage persistence (defaults to dark)
- Splash screen entry with auto-starting background music (shuffle)
- In-nav volume and mute controls
- Responsive layout across mobile and desktop
- Smooth scroll navigation

## API Used

**GitHub REST API** - fetches the 6 most recently updated public repositories for the user and renders them as cards with name, description, language, and a direct link.

```
https://api.github.com/users/W0506783/repos?sort=updated&per_page=6
```

## Setup

```bash
git clone https://github.com/W0506783/portfolio-vanilla.git
cd portfolio-vanilla
npm install
npm run dev
```

Open `index.html` with Live Server in VS Code. The `npm run dev` command watches and compiles Tailwind CSS — keep it running alongside Live Server while developing.

To build for production:

```bash
npm run build
```

## Live Site

[https://W0506783.github.io/portfolio-vanilla](https://W0506783.github.io/portfolio-vanilla)

## Screenshots

![Hero Section](images/headshot.png)

## Course

PROG2700 - MP3 Professional Developer Portfolio
