import { cva } from "class-variance-authority";

export const spinnerSizes = ["sm", "md", "lg"] as const;

export const spinnerVariants = ["default", "muted", "inverse"] as const;

export type SpinnerSize = (typeof spinnerSizes)[number];

export type SpinnerVariant = (typeof spinnerVariants)[number];

export const spinnerVariantsStyles = cva(
	[
		"animate-spin",
		"rounded-full",
		"border-2",
		"border-current",
		"border-t-transparent",
	],
	{
		variants: {
			size: {
				sm: "h-4 w-4",

				md: "h-6 w-6",

				lg: "h-10 w-10",
			},

			variant: {
				default: "text-primary",

				muted: "text-muted-foreground",

				inverse: "text-primary-foreground",
			},
		},

		defaultVariants: {
			size: "md",

			variant: "default",
		},
	},
);
