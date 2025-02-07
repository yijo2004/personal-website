import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/personal-website/', // 👈 Ensure this matches your GitHub repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure output is in the correct folder
    assetsDir: './src/assets', // Keeps assets organized
  }
});
