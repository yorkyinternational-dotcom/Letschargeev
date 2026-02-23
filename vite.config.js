import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // 👈 MUST match your GitHub repository name exactly
})

export default defineConfig({
  plugins: [react()],
})
