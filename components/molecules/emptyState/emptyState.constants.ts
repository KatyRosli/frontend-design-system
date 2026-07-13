import { cva } from "class-variance-authority";

export const emptyStateVariants = cva(
	["flex", "w-full", "flex-col", "items-center", "text-center"],

	{
		variants: {
			size: {
				sm: ["gap-3", "py-6"],

				md: ["gap-4", "py-10"],

				lg: ["gap-6", "py-16"],
			},
		},

		defaultVariants: {
			size: "md",
		},
	},
);

export const emptyStateIconVariants = cva(
	[
		"flex",
		"items-center",
		"justify-center",
		"rounded-full",
		"bg-muted",
		"text-muted-foreground",
	],

	{
		variants: {
			size: {
				sm: ["h-10", "w-10"],

				md: ["h-14", "w-14"],

				lg: ["h-20", "w-20"],
			},
		},

		defaultVariants: {
			size: "md",
		},
	},
);

export const emptyStateSizes = ["sm", "md", "lg"] as const;

export type EmptyStateSize = (typeof emptyStateSizes)[number];
