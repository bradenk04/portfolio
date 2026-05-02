# bradenkennedy.com

Personal portfolio and resume site for Braden Kennedy — Backend & Systems Engineer, Mathematics & CS student at Eastern
Washington University.

Built with [Astro](https://astro.build), deployed to [bradenkennedy.com](https://www.bradenkennedy.com).

---

## Stack

| Layer               | Technology                      |
|---------------------|---------------------------------|
| Framework           | [Astro](https://astro.build)    |
| Interactive islands | [Solid.js](https://solidjs.com) |
| Package manager     | [pnpm](https://pnpm.io)         |
| Styling             | Tailwind CSS                    |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18+
- [pnpm](https://pnpm.io) — install with `npm i -g pnpm`

### Local development

```bash
# Clone the repository
git clone https://github.com/bradenk04/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

The site will be available at `http://localhost:4321`.

### Build

```bash
# Production build
pnpm build

# Preview the production build locally
pnpm preview
```

---

## Contributing

Contributions are welcome — whether that's a bug fix, a typo, or a suggestion. Please read the guidelines below before
opening a PR.

### Commit style

This project follows [Conventional Commits](https://www.conventionalcommits.org):

| Prefix   | Use for                            |
|----------|------------------------------------|
| `feat:`  | New feature or section             |
| `fix:`   | Bug fix                            |
| `chore:` | Dependency updates, config changes |
| `style:` | CSS / visual changes only          |
| `docs:`  | README or comment updates          |
| `perf:`  | Performance improvements           |

### What not to change

- Personal content (bio, projects, work history) — this is my portfolio, not a template
- SEO metadata and structured data
- Domain or deployment configuration

If you're looking to use this as a starting point for your own portfolio, feel free to fork it! Credit would be greatly
appreciated.

---

## License

The source code is open source under the [MIT License](LICENSE). Personal content (writing, images, project
descriptions) remains © Braden Kennedy — please don't reproduce it.