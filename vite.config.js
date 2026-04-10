import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // if you're deploying to a GitHub Pages project repository,
  // replace "repo-name" below with the actual repository name
  base: '/portfolio_2026/',
  plugins: [react()],
})
