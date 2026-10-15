import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" = relative Pfade, damit die App auch unter
// https://<name>.github.io/<repo>/ (GitHub Pages) funktioniert.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
