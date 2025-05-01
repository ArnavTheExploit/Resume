<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Resume Website – CodeNest 🌐

This is my personal resume and portfolio website built with **React + Tailwind CSS**. It includes:

- ✨ My personal introduction
- 👥 A beautiful team section (CodeNest)
- 📱 Responsive design
- 🧠 Built with React & Tailwind CSS

## 🧩 Pages & Features

- `Home` – Overview
- `Team` – Meet the team (CEO, CTO, etc.)
- `Projects` – Showcases Getaway App
- `Footer` – Social links and copyright

## 🔗 Live Site (optional)
[View Live](https://your-username.github.io/resume-website/)

## 🚀 Tech Stack
- React
- TypeScript
- Tailwind CSS
- GitHub Pages (or Vercel/Netlify)

## 📸 Screenshots
Add a few screenshots here (optional).

---

© 2025 Arnav Paniya – CodeNest

=======
# Resume
>>>>>>> 1d9c61f20dbd8b7bf2820068f300dee7c2666dff
