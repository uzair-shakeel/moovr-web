import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-intl-tel-input"],
    },
  },
  resolve: {
    alias: {
      'react-intl-tel-input': 'react-intl-tel-input/lib/index.js', // Adjust path if needed
    },
  },
});
