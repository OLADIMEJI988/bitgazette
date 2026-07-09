import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/wp": {
        target: "https://thebitgazette.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wp/, "/wp-json"),
      },
    },
  },
});