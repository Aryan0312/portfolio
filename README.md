# Aryan Shrivastav's Portfolio

A modern, terminal-themed portfolio website built with HTML, CSS, and vanilla JavaScript. Features an interactive API explorer, project showcase, and terminal mode for a unique developer experience.

**Live Demo:** https://www.aryan-project-demo.online/

---

## 🎨 Features

- **Terminal-Inspired Design** - Dark theme with syntax highlighting aesthetic
- **Interactive API Explorer** - Simulated API endpoints to explore profile data
- **Project Showcase** - Image carousels for project demonstrations
- **Terminal Mode** - Full interactive terminal interface with commands
- **Responsive Design** - Mobile-friendly and accessible
- **SEO Optimized** - Structured data, sitemaps, and meta tags for Google ranking
- **Vercel Deployment Ready** - Configured with rewrites and security headers

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with semantic markup & JSON-LD schemas
├── styles.css          # Complete styling (38% of project)
├── script.js           # Interactive features (26% of project)
├── robots.txt          # SEO crawler directives
├── sitemap.xml         # XML sitemap for search engines
├── vercel.json         # Deployment config with rewrites & headers
├── assets/
│   ├── profile.jpeg    # Profile image
│   ├── formforge-home.png
│   └── propelify-home.png
└── README.md           # This file
```

---

## 🚀 Quick Start

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime, etc.)
- (Optional) Node.js & npm for local server
- (Optional) Git for version control

### Local Development

**1. Clone the repository:**
```bash
git clone https://github.com/Aryan0312/portfolio.git
cd portfolio
```

**2. Option A: Open directly in browser**
```bash
# Simply open index.html in your browser
open index.html  # macOS
start index.html # Windows
```

**3. Option B: Use a local server (recommended)**
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npm install -g http-server
http-server

# Using VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Then visit: `http://localhost:8000`

---

## 📝 Customization Guide

### Change Personal Information
Edit `index.html`:

```html
<!-- Line 6: Update title -->
<title>Your Name | Your Title</title>

<!-- Line 49: Update name -->
<h1 id="intro-title">Your Name</h1>

<!-- Line 50: Update subtitle -->
<p class="subtitle">Your Title</p>

<!-- Line 51: Update profile image -->
<img class="profile-img" src="your-image.jpg" alt="...">

<!-- Line 52: Update bio -->
<p class="bio">Your bio here...</p>
```

### Update Social Links
```html
<!-- Lines 54-57: Update profile links -->
<a class="btn btn-secondary" href="your-github-url/">GitHub</a>
<a class="btn btn-secondary" href="your-linkedin-url/">LinkedIn</a>
```

### Modify API Endpoints (API Explorer)
Edit `script.js` - Look for the `apiResponses` object:

```javascript
const apiResponses = {
  developer: {
    // Update response data
  },
  skills: {
    // Update skills
  },
  projects: {
    // Update projects
  },
  experience: {
    // Update experience
  }
};
```

### Update Skills Section
Edit `index.html` lines 89-109:
```html
<article>
  <h3>Your Category</h3>
  <p>Your skills here...</p>
</article>
```

### Add/Modify Projects
Edit `index.html` lines 111-144:
- Update project titles, descriptions, and tech stacks
- Replace carousel images in `assets/` folder
- Update GitHub links

### Update Experience
Edit `index.html` lines 146-177:
- Modify dates, companies, and job titles
- Update responsibilities and achievements

### Change Colors & Styling
Edit `styles.css`:
```css
/* Change primary colors */
--primary-bg: #101010;  /* Background */
--text-primary: #ffffff; /* Main text */
--accent: #00ff00;       /* Terminal green */
```

---

## 🔍 SEO Configuration

### Update Domain References
Update these files with your domain:

1. **index.html** - Lines with `https://www.aryan-project-demo.online/`:
```html
<link rel="canonical" href="YOUR_DOMAIN">
<meta property="og:url" content="YOUR_DOMAIN">
<!-- Update JSON-LD @id and urls -->
```

2. **robots.txt**:
```txt
Sitemap: https://your-domain.com/sitemap.xml
```

3. **sitemap.xml**:
```xml
<loc>https://your-domain.com/</loc>
<!-- Update all URL references -->
```

### Submit to Search Engines

1. **Google Search Console** (https://search.google.com/search-console/)
   - Verify domain ownership
   - Submit sitemap at `Sitemaps` tab
   - Monitor indexing status

2. **Bing Webmaster Tools** (https://www.bing.com/webmasters/)
   - Add property
   - Submit sitemap

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Configure domain:**
   - Go to Vercel dashboard
   - Add custom domain
   - Update DNS records (CNAME/A records)

### Deploy to GitHub Pages

1. **Create `gh-pages` branch:**
```bash
git checkout -b gh-pages
git push origin gh-pages
```

2. **Enable in GitHub:**
   - Settings → Pages
   - Source: `gh-pages` branch
   - Save

### Deploy to Netlify

1. **Connect repository:**
   - Go to netlify.com
   - Click "New site from Git"
   - Select your repository
   - Deploy

---

## 🔒 Security & Safety

### Is This Repo Safe to Keep Public?

**✅ YES, it's safe!** Here's why:

1. **No Sensitive Data:**
   - No API keys, tokens, or credentials
   - No passwords or private information
   - Only public profile information (name, GitHub URL, LinkedIn, email)

2. **Contact Email:**
   - Using a public email (`aryanshrivastav.dev@gmail.com`) is standard for portfolios
   - Consider using a contact form with backend validation to reduce spam

3. **Best Practices Applied:**
   - Security headers in `vercel.json`
   - No hardcoded secrets
   - Input validation on forms

### Recommendations for Maximum Security:

```json
{
  "headers": [
    {
      "source": "/:path*",
      "headers": [
        {"key": "X-Content-Type-Options", "value": "nosniff"},
        {"key": "X-Frame-Options", "value": "DENY"},
        {"key": "X-XSS-Protection", "value": "1; mode=block"},
        {"key": "Referrer-Policy", "value": "strict-origin-when-cross-origin"}
      ]
    }
  ]
}
```

**Additional Tips:**
- ✅ Use environment variables for any future sensitive config (store in Vercel/platform settings)
- ✅ Implement CAPTCHA on contact forms to prevent spam
- ✅ Monitor for abuse with analytics
- ✅ Keep dependencies updated (for future frameworks)

---

## 📊 Language Composition

- **HTML**: 38.3% - Semantic markup with microdata
- **CSS**: 34.9% - Responsive styling
- **JavaScript**: 26.8% - Interactive features

---

## ✨ Key Features Explained

### Terminal Mode
Click "Shift to Terminal" button to switch to fullscreen terminal interface. Try commands like:
- `help`
- `about`
- `projects`
- `skills`
- `contact`

### API Explorer
Select an endpoint and click "Execute" to see simulated API responses:
- `/api/user/profile`
- `/api/user/skills`
- `/api/user/projects`
- `/api/user/experience`

### Image Carousels
Navigate project images with arrow buttons or click dots to jump to specific images.

---

## 🎯 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📱 Responsive Breakpoints

```css
Desktop:  1024px+
Tablet:   768px - 1023px
Mobile:   < 768px
```

---

## 🚀 Performance Optimization

- Preconnected font loading
- Optimized image sizes
- CSS caching with version tags (`?v=4`)
- Minimal JavaScript (vanilla, no frameworks)
- Semantic HTML for faster rendering

---

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Favcon not showing | Hard refresh (Cmd+Shift+R / Ctrl+Shift+R) |
| Images not loading | Ensure `assets/` folder contains images |
| API Explorer not working | Check browser console for JS errors |
| Terminal commands not working | Open DevTools console to see errors |
| SEO not indexing | Submit sitemap to Google Search Console |

---

## 📄 License

This project is open source and available publicly. Feel free to fork, modify, and use as a template for your own portfolio.

---

## 👤 Author

**Aryan Shrivastav**
- GitHub: [@Aryan0312](https://github.com/Aryan0312)
- LinkedIn: [aryan-shrivastav](https://www.linkedin.com/in/aryan-shrivastav-274a51321/)
- LeetCode: [@aryan5375](https://leetcode.com/u/aryan5375/)
- Email: aryanshrivastav.dev@gmail.com

---

## 🤝 Contributing

If you find bugs or have suggestions:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📚 Resources & References

- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML Semantic Elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [CSS Best Practices](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Structured Data](https://schema.org/)
- [Vercel Documentation](https://vercel.com/docs)

---

**Last Updated:** September 4, 2026

**Status:** ✅ Production Ready | 📈 SEO Optimized | 🚀 Deployed on Vercel