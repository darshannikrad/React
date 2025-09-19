import { defineConfig } from 'vite'
import "tailwindcss";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})