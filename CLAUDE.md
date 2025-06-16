# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is Diego Petrucci's personal website hosted on GitHub Pages with two distinct parts:

- **Root (`/`)**: Static personal homepage with basic HTML/CSS
- **Blog (`/dev/`)**: Jekyll-powered development blog using the Minimal Mistakes theme

## Key Commands

### Jekyll Blog Development (dev/ directory)
```bash
# Install dependencies
cd dev && bundle install

# Run local development server
cd dev && bundle exec jekyll serve
# Access at: http://127.0.0.1:4000/dev/

# Build for production
cd dev && bundle exec jekyll build
```

## Architecture Notes

### Dual Site Setup
The repository serves two different sites:
1. Main site at `diegopetrucci.github.io` (root directory)
2. Dev blog at `diegopetrucci.github.io/dev/` (dev/ subdirectory)

### Jekyll Configuration
- Uses `remote_theme: "mmistakes/minimal-mistakes"` for theming
- Configured with `baseurl: "/dev"` to work as a subdirectory
- Requires `jekyll-remote-theme` plugin for GitHub Pages compatibility
- Posts use `layout: single` with author profile, read time, and sharing enabled

### GitHub Pages Deployment
- Automatic deployment from main branch
- Jekyll builds happen on GitHub's servers
- Changes to `dev/` trigger rebuilds for the blog subdirectory

### Content Structure
- Blog posts go in `dev/_posts/` following Jekyll naming convention: `YYYY-MM-DD-title.md`
- Static pages can be added to `dev/` root or `dev/_pages/` directory
- Main homepage content is in root `index.html`