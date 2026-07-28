import "../src/styles/globals.css";
import type { Preview } from "@storybook/nextjs-vite";
import { Inter, Montserrat } from "next/font/google";
import { cn } from "../src/lib/utils";

const inter = Inter({
	variable: "--font-body",
	subsets: ["latin"],
});

const montserrat = Montserrat({
	variable: "--font-heading",
	subsets: ["latin"],
});

const preview: Preview = {
	decorators: [
		(Story, context) => {
			const isDark = context.globals.theme === "dark";

			return (
				<div
					className={cn(
						inter.variable,
						montserrat.variable,
						"min-h-screen p-8",
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
		options: {
			storySort: {
				order: [
					"Documentations",
					[
						"Introduction",
						"Design Principles",
						"Accessibility",
						"Voice and Tone",
					],
					"Foundations",
					[
						"Typography",
						"Colors",
						"Spacing",
						"Icons",
					],
					"Components",
					[
						"Atoms",
						["Avatar", "Button", "Checkbox", "Dropdown", "Input", "Skeleton", "Spinner"],
						"Molecules",
						["EmptyState", "FormField", "PasswordField"],
						"Organisms",
						["LoginForm"]
					],
				],
			},
		},
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
