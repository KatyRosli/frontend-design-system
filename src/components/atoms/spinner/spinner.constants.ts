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
				sm: "size-4",

				md: "size-6",

				lg: "size-10",
			},

			variant: {
				default: "text-primary",

				muted: "text-text-disabled",

				inverse: "text-foreground",
			},
		},

		defaultVariants: {
			size: "md",

			variant: "default",
		},
	},
);
