import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👇 Add your repo name here
const repoName = 'yarden-site';

export default defineConfig({
  base: `/${repoName}/`, // 👈 Required for GitHub Pages
  plugins: [react()],
});
