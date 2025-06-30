# T001 - Digital Marketing Website

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Deployment

This project is configured for GitHub Pages deployment. The site is available at: https://vokondo.github.io/tr001/

### Automatic Deployment

The project uses GitHub Actions to automatically deploy to GitHub Pages when you push to the main branch.

### Manual Deployment

If you need to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory

3. Configure GitHub Pages in your repository settings to serve from the `dist/` directory

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

- `src/` - Source code
- `dist/` - Built files (generated after build)
- `public/` - Static assets
- `.github/workflows/` - GitHub Actions workflows

## 🔧 Configuration

The project is configured with:
- **Base URL**: `/t001/` (for GitHub Pages)
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite 