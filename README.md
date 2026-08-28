# Zeeshan Lateef | Portfolio Website

This is a premium, dark-themed, fully responsive personal portfolio website for **Zeeshan Lateef (Full Stack Software Developer / Software Engineer)**. Built as a pure frontend React application, it features high-performance canvas particle backgrounds, interactive 3D hover tilt cards with zero-latency mouse tracking, custom tooltips, a professional letters-staggered preloader, and functional email submissions powered by client-side **EmailJS** integration.

---

## 🔗 Live Repository & Demo
- **GitHub Repository:** [https://github.com/zeeshanlateef/zeeshanlateef](https://github.com/zeeshanlateef/zeeshanlateef)
- **Suggested Repository Name:** `zeeshanlateef` or `zeeshan-lateef-portfolio`

---

## 🚀 Key Features

- **Frontend Architecture:** 100% static React.js client build. Zero backend server or database instances required to deploy.
- **EmailJS Integration:** Send contact form submissions directly from your frontend code to `zeeshanlateef2016@gmail.com` using client-side service scripts.
- **Snappy 3D Card Hover Physics:** Custom zero-lag cursor tracking on hover with smooth cubic-bezier resetting and multi-layered radial spotlight shine.
- **Vibrant Accent Design System:** Sleek, high-contrast dark theme with alternating background blocks (`#08080f` and `#05050a`) for clean visual scroll rhythm.
- **Personalized Branded Favicon:** Restored and linked original branding assets inside metadata headers.
- **Interactive Canvas Particles:** Responsive, high-performance node particles trailing background movements.
- **SEO & Social Optimization:** Complete meta tag index mapping, Open Graph protocols, structured semantic tags, and search index keyword targeting.

---

## 📁 Repository Structure

```text
zeeshanlateef/
├── client/
│   ├── public/             # Static Assets (Resume PDF, favicon.png, profile image)
│   ├── src/                # React Source Code
│   │   ├── components/     # UI elements (ParticleBackground, Preloader, TiltCard, SocialIcons)
│   │   ├── sections/       # Layout sections (Hero, About, Skills, Experience, Projects, Contact, Footer)
│   │   ├── pages/          # Router pages (Home, AllProjects)
│   │   ├── App.jsx         # App router wrapper & WhatsApp float widget
│   │   ├── main.jsx        # Root entry point
│   │   └── index.css       # Custom scrollbars, glassmorphism panel styles, and variables
│   ├── vite.config.js      # Vite build bundler configuration
│   └── package.json        # Client dependencies & script directives
├── package.json            # Root workspaces run scripts
└── README.md               # Main Documentation
```

---

## 🛠️ Local Installation & Setup

### 1. Clone & Install Dependencies
From your workspace root directory:
```bash
# Install root workspace and client workspace packages
npm run install:all
```

### 2. Configure EmailJS Credentials
The contact form is already integrated with the active EmailJS keys. If you want to change keys, open `client/src/sections/Contact.jsx` and customize the parameters:
```javascript
emailjs.sendForm(
  "service_tdtezjs",   // Service ID
  "template_85h2msu",   // Template ID
  formRef.current,
  "CoA0m8HzSq_KvTGFi"   // Public Key
)
```

### 3. Run the Development Server
Launch the local Vite server:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) inside your web browser.

---

## 📦 Production Build & Deploy

This project is a static React application, meaning it can be built and hosted for free on Vercel, Netlify, or GitHub Pages.

1. **Build the production assets:**
   ```bash
   npm run build
   ```
2. The output will be compiled inside the `/client/dist` directory.
3. Deploy the `/client/dist` directory to your chosen hosting provider.
