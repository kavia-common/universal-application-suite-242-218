import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// PUBLIC_INTERFACE
// Vite configuration for React application
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false
  },
  preview: {
    port: 5173
  }
});
