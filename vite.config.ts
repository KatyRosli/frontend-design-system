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
    preserveDirectives({
      include: ["src/**/*.{ts,tsx}"],
    }),

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
      // @base-ui/react ships dual CJS/ESM output; bundling it here can pull
      // in its CJS files (which do a literal `require("react")`) instead of
      // the ESM build, which breaks at runtime in the browser. Leaving it
      // (and its @base-ui/utils dependency) external lets the consuming
      // app's own bundler resolve it correctly, the same way react/react-dom
      // already are.
      external: (id) =>
        ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"].includes(id) ||
        id.startsWith("@base-ui/react") ||
        id.startsWith("@base-ui/utils"),
    },

    sourcemap: true,
    emptyOutDir: true,
  },
});
