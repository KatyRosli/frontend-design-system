import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},

	plugins: [
		dts({
			insertTypesEntry: true,
		}),
	],

	build: {
		lib: {
			entry: "src/index.ts",
			formats: ["es"],
			fileName: "index",
		},

		rollupOptions: {
			external: [
				"react",
				"react-dom",
			],
		},
	},
});