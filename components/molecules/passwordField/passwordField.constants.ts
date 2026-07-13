import { cva } from "class-variance-authority";


export const passwordFieldVariants = cva(
	[
		"inline-flex",
		"items-center",
		"justify-center",
		"rounded-md",
		"transition-colors",
		"cursor-pointer",

		"hover:text-foreground",

		"focus-visible:outline-none",
		"focus-visible:ring-2",
		"focus-visible:ring-ring",
		"focus-visible:ring-offset-2",

		"disabled:pointer-events-none",
		"disabled:opacity-50",
	],
	{
		variants: {
			size: {
				sm: "h-4 w-4",

				lg: "h-5 w-5",
			},
		},

		defaultVariants: {
			size: "lg",
		},
	},
);


export const passwordFieldSizes = [
	"sm",
	"lg",
] as const;


export type PasswordFieldSize =
	(typeof passwordFieldSizes)[number];
  