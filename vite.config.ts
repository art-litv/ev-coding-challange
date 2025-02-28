import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/common": path.resolve(__dirname, "./src/common"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/providers": path.resolve(__dirname, "./src/providers"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
