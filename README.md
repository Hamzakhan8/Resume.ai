# Resume.ai - AI-Powered ATS Resume Generator

## Overview
Resume.ai is a modern tool that leverages AI to create ATS-friendly resumes tailored to specific job descriptions. Simply upload your CV and job posting, and our AI will optimize your resume to increase your chances of getting past Applicant Tracking Systems (ATS).

## ✨ Key Features
- **ATS Optimization**: Creates ATS-friendly resume formats
- **Smart Matching**: Analyzes job descriptions and matches your skills
- **Dual Format**: Download in both PDF and Word formats
- **Instant Results**: Get your tailored resume in seconds

## 📚 Documentation

### API Endpoints

#### 1. Analyze Resume
## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Bug Reports
Please use the GitHub Issues tab to report bugs. Include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
---
Built with ❤️ by [Hamza Khan](https://github.com/Hamzakhan8)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Google Gemini API key

### Installation


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```




