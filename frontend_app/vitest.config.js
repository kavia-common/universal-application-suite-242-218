import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

/**
 * PUBLIC_INTERFACE
 * Vitest configuration for unit testing React components in a jsdom environment.
 */
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setupTests.js"],
    css: true
  }
});
