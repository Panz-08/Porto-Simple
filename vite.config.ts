import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { fullName, site } from "./src/config/site";

const escapeHtml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

function siteMeta(): Plugin {
  return {
    name: "site-meta",
    transformIndexHtml(html) {
      return html
        .replaceAll("{{SITE_TITLE}}", escapeHtml(site.seo.title))
        .replaceAll("{{SITE_DESCRIPTION}}", escapeHtml(site.seo.description))
        .replaceAll("{{SITE_AUTHOR}}", escapeHtml(fullName));
    },
  };
}

export default defineConfig({
  plugins: [react(), siteMeta()],
  build: {
    target: "es2022",
    sourcemap: false,
  },
});