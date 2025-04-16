# Adapt - AI Survival Training Platform

A modern web application for learning AI skills through bite-sized, gamified lessons. Adapt helps professionals future-proof their careers in the age of artificial intelligence.

## Features

- 🧠 Learning from 7+ specialized AI mentors
- 🎮 Gamified learning experience with streaks and badges
- 📱 Bite-sized daily lessons that fit into any schedule
- 🚀 Real-world AI applications and job-saving insights
- 📊 Progress tracking and skill development analytics

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/adapt-ai-training.git
cd adapt-ai-training
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Deployment Options

### Option 1: Netlify

1. Create a `netlify.toml` file in the project root:
```toml
[build]
  publish = "."
  command = "# no build command needed"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Deploy via Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy
```

3. Or connect your GitHub repository to Netlify for continuous deployment.

### Option 2: Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

3. Or connect your GitHub repository to Vercel for continuous deployment.

### Option 3: GitHub Pages

1. Create a `.github/workflows/deploy.yml` file:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages
          folder: .
```

2. Push to GitHub and the workflow will deploy your site.
3. Enable GitHub Pages in your repository settings.

### Option 4: Heroku

1. Create a `Procfile` in the project root:
```
web: node server.js
```

2. Deploy to Heroku:
```bash
heroku create adapt-ai-training
git push heroku main
```

## Environment Variables

For production deployment, consider setting these environment variables:

- `PORT`: Server port (defaults to 3000)
- `NODE_ENV`: Set to 'production' for optimized performance

## Project Structure

```
adapt-ai-training/
├── index.html        # Main HTML document
├── styles.css        # CSS styles
├── server.js         # Express server for serving the application
├── package.json      # Project configuration and dependencies
└── README.md         # Project documentation
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please open an issue on GitHub or contact us at support@adapt-ai.com. 