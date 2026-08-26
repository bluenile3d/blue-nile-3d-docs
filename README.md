# BLUE NILE 3D Tools and Add-On Documentation

Public documentation for BLUE NILE 3D tools, add-ons, resources, and related products.

This repository contains documentation only. Do not add paid product source code, distributable files, license keys, customer information, or private assets.

## Local preview

From the repository root:

```powershell
py -3 -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

Open `http://127.0.0.1:8000/blue-nile-3d-docs/` in a browser. The preview refreshes when a documentation file is saved.

## Add another product or tool

1. Create a folder under `docs` using a stable lowercase slug, such as `docs/my-product`.
2. Start with the outline in `templates/product-section.md`.
3. Add the new pages to `nav` in `mkdocs.yml`.
4. Preview the site locally before publishing.

Avoid version numbers in folder names and permanent URLs. Put release-specific information in a changelog only when it is useful to customers.

## Publishing

Pushing to `main` runs `.github/workflows/docs.yml`, validates the site, and publishes the generated website to the `gh-pages` branch.

After the first successful workflow run, configure GitHub Pages to deploy from the `gh-pages` branch and the repository root.
