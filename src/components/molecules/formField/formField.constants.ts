import { cva } from "class-variance-authority";

export const formFieldVariants = cva(["flex", "w-full", "flex-col", "gap-2"], {
	variants: {
		spacing: {
			sm: "gap-1.5",

			md: "gap-2",
		},
	},

	defaultVariants: {
		spacing: "md",
	},
});

export const formFieldMessageVariants = cva(["text-sm"], {
	variants: {
		state: {
			default: "text-text-secondary",

			error: "text-danger",
		},
	},

	defaultVariants: {
		state: "default",
	},
});

export const formFieldSpacings = ["sm", "md"] as const;

export type FormFieldSpacing = (typeof formFieldSpacings)[number];
