import "../app/globals.css";
import type { Preview } from "@storybook/nextjs-vite";
import { Geist } from "next/font/google";
import { cn } from "../lib/utils";

const geist = Geist({
	variable: "--font-sans",
	subsets: ["latin"],
});

const preview: Preview = {
	decorators: [
		(Story, context) => {
			const isDark = context.globals.theme === "dark";

			return (
				<div
					className={cn(
						geist.variable,
						"font-sans min-h-screen p-8",
						isDark 
							? "dark bg-background" 
							: "bg-background",
					)}
				>
					<Story />
				</div>
			);
		},
	],

	globalTypes: {
		theme: {
			description: "Global theme",

			defaultValue: "light",

			toolbar: {
				title: "Theme",

				icon: "paintbrush",

				items: [
					{
						value: "light",
						title: "Light",
					},
					{
						value: "dark",
						title: "Dark",
					},
				],
			},
		},
	},

	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,

				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},
	},
};

export default preview;
