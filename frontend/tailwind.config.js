import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // important for Vite
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if your files are elsewhere
  ],
  theme: {
    extend: {},
  },
  plugins: [react(), tailwindcss()],
};
