import { cva } from "class-variance-authority";

export const dropdownSizes = ["sm", "md"] as const;

export const dropdownStates = ["default", "error"] as const;

export type DropdownSize = (typeof dropdownSizes)[number];

export type DropdownState = (typeof dropdownStates)[number];

export const dropdownTriggerVariants = cva(
	[
		"flex w-full items-center justify-between",
		"rounded-md border",
		"bg-background text-foreground",
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
				sm: "h-9 px-3 text-sm",
				md: "h-11 px-4 text-sm",
			},

			state: {
				default: "border-input hover:border-primary",

				error: "border-destructive focus-visible:ring-destructive",
			},
		},

		defaultVariants: {
			size: "md",
			state: "default",
		},
	},
);

export const dropdownContentVariants = cva(
	[
		"z-50",
		"overflow-hidden",
		"rounded-md",
		"border",
		"bg-popover",
		"text-popover-foreground",
		"shadow-md",
	],
	{
		variants: {
			size: {
				sm: "text-sm",
				md: "text-sm",
			},
		},

		defaultVariants: {
			size: "md",
		},
	},
);
