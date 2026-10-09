import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import shareMeta from './plugins/shareMeta'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: '/',
  plugins: [...(command === 'serve' ? [inspectAttr()] : []), react(), shareMeta()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
