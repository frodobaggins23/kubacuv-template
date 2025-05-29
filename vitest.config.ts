import { defineConfig } from "vitest/config"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitest.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    globals: true,
  },
})
