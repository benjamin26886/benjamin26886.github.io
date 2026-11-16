# Nick — Portfolio

A fast, responsive, dependency-free portfolio website. Pure HTML/CSS/JS — no build step, perfect for GitHub Pages.

## ✏️ Editing your content

**All content lives in [`js/data.js`](js/data.js).** Change your name, intro, socials, projects and experience there.

### Adding a new tech stack / skill
Open `js/data.js`, find `skills`, and add an item:

```js
{ name: "Python", icon: "python" },
```

Icon names come from [devicon.dev](https://devicon.dev) (e.g. `react`, `nodejs`, `docker`, `typescript`, `postgresql`).
You can also add a whole new category:

```js
{ category: "Frameworks", items: [{ name: "React", icon: "react" }] },
```

### Adding a CV
Put your PDF in `assets/resume.pdf` and set `resumeUrl: "assets/resume.pdf"`.

## 👀 Preview locally
Just open `index.html` in your browser, or run:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🚀 Deploy to GitHub Pages
1. Create a GitHub repo named **`<your-username>.github.io`** (gives you the URL `https://<your-username>.github.io`).
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: Deploy from branch → `main` / `root`** → Save.
4. Your site will be live in a minute or two.
