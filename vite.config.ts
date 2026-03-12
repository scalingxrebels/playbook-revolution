import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon-sx.png", "images/scalingx-logo.png"],
      workbox: {
        navigateFallbackDenylist: [/^\/~oauth/],
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
      },
      manifest: {
        name: "ScalingX — AI-Native Scaling",
        short_name: "ScalingX",
        description: "Series A-D SaaS-Unternehmen skalieren 3-5x schneller mit forschungsbasierter Methodik.",
        theme_color: "#0a0118",
        background_color: "#0a0118",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/favicon-sx.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicon-sx.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/favicon-sx.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
