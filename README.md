# Automation Portfolio

Single-page portfolio built with React + Vite. No backend, no database, no login.

## Run it

```bash
npm install
npm run dev
```

## Where to edit things

| What | Where |
| --- | --- |
| Name, title, tagline, bio, skills, LinkedIn/GitHub links, CV path, contact form key | `src/data/site.js` |
| Projects | `src/data/projects.json` |
| Browser-tab title, description, share-preview tags | `index.html` (look for `EDIT`) |
| CV file | replace `public/cv.pdf` |
| Project screenshots | add to `public/projects/`, reference as `/projects/your-file.png` |
| Share-preview image (1200×630) | replace `public/og-image.png` |
| Colours | the variables at the top of `src/styles/index.css` |

Search the project for `EDIT`, `PLACEHOLDER` and `YOUR` to find everything that still needs your real content.

## Add a project

Add one entry to `src/data/projects.json` and push. The site redeploys on its own.

```json
{
  "id": "unique-slug",
  "title": "Project title",
  "summary": "One line shown while collapsed.",
  "description": "Full description shown when expanded.",
  "tools": ["n8n", "OpenAI"],
  "tags": ["AI"],
  "image": "/projects/unique-slug.png",
  "githubUrl": "https://github.com/you/repo",
  "type": "automation",
  "videoUrl": "",
  "caseStudy": ""
}
```

- `tags`, `type`, `videoUrl` and `caseStudy` are reserved for later features (tag filters, design projects, demo videos, case studies) and not displayed yet.
- JSON does not allow comments or trailing commas.

## Contact form

1. Go to web3forms.com, enter your email, and they send you an access key.
2. Paste it into `web3formsKey` in `src/data/site.js`.

The key is designed to be public. Until it is set, the form shows a "not set up yet" message instead of sending.

## Deploy (Vercel or Netlify)

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel or Netlify. Both detect Vite; build command `npm run build`, output folder `dist`.
3. Every push to the main branch redeploys.
4. Put your live address into the `og:url`, `og:image` and `twitter:image` tags in `index.html`.

## Before publishing workflow repos

Check each exported n8n / Make.com JSON for hard-coded API keys, webhook URLs and personal emails.

## Structure

```
index.html               meta tags, font, theme-before-paint script
public/                  cv.pdf, og-image.png, favicon.svg, projects/ (screenshots)
src/
  main.jsx  App.jsx      entry + section order
  data/site.js           personal details
  data/projects.json     projects
  hooks/useTheme.js      dark/light toggle, remembered in localStorage
  hooks/useActiveSection.js   which nav item to highlight
  components/            Nav, Hero, Projects, ProjectItem, Skills, About, Contact, Footer
  styles/index.css       theme variables + all styles
```

## Where the future features plug in

- **Design projects**: add entries with `"type": "design"` and a `Design` tag; they appear in the same list under a Design filter.
- **Demo videos / case studies**: render `videoUrl` and `caseStudy` at the marked `FUTURE` comment in `src/components/ProjectItem.jsx`.
- **Auto-sync from GitHub**: replace the `projects.json` import in `src/components/Projects.jsx` with a build-time script that writes the same shape from repos tagged with a topic.
