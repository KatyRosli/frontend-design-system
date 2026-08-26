import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  plugins: [
    preserveDirectives(),

    dts({
      insertTypesEntry: true,
      exclude: [
        "**/*.stories.*",
        "**/*.test.*",
        ".storybook/**",
      ],
    }),
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "DesignSystem",
      formats: ["es"],
      fileName: "index",
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
    },

    sourcemap: true,
    emptyOutDir: true,
  },
});
