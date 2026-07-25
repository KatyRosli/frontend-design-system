import { cva } from "class-variance-authority";

export const inputSizes = ["sm", "lg"] as const;

export const inputStates = ["default", "error"] as const;

export type InputSize = (typeof inputSizes)[number];

export type InputState = (typeof inputStates)[number];

export const inputVariants = cva(
	[
		"flex w-full",
		"rounded-md",
		"border",
		"bg-background",
		"text-foreground",
		"placeholder:text-muted-foreground",
		"transition-colors",

		"outline-none",

		"focus-visible:ring-2",
		"focus-visible:ring-ring",
		"focus-visible:ring-offset-2",

		"disabled:pointer-events-none",
		"disabled:cursor-not-allowed",
		"disabled:opacity-50",
	],
	{
		variants: {
			size: {
				sm: `
					h-9
					px-3
					text-sm
				`,

				lg: `
					h-11
					px-4
					text-sm
				`,
			},

			state: {
				default: "border-input hover:border-primary",

				error: "border-destructive focus-visible:ring-destructive",
			},
		},

		defaultVariants: {
			size: "lg",

			state: "default",
		},
	},
);
