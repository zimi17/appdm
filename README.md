# APPDM Static Website

This is a static version of the APPDM (Akademi Pimpinan Perusahaan Daerah Makassar) university website, generated from WordPress using Simply Static plugin.

## Structure

- `index.html` - Homepage
- `wp-content/` - WordPress assets (CSS, JS, images)
- `wp-includes/` - WordPress core assets
- Various directories for different pages and sections

## Deployment

This is a static site that can be deployed to any static hosting service:

- **Vercel**: Configured with `vercel.json`
- **Netlify**: Configured with `netlify.toml`
- **GitHub Pages**: Can be served directly from the repository

## Local Development

Since this is a static site, you can serve it locally using any web server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` to view the site.

## Features

- Responsive design
- University information and programs
- Faculty and research information
- Student life content
- Admission information (PMB)
- Built with Elementor page builder
