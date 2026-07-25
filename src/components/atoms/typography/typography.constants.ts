import { cva } from "class-variance-authority";

export const typographyVariants = cva("", {
	variants: {
		variant: {
			display:
				"text-5xl font-bold tracking-tight",

			h1:
				"text-4xl font-bold tracking-tight",

			h2:
				"text-3xl font-semibold tracking-tight",

			h3:
				"text-2xl font-semibold",

			h4:
				"text-xl font-semibold",

			h5:
				"text-lg font-medium",

			h6:
				"text-base font-medium",

			bodyLg:
				"text-lg font-normal",

			body:
				"text-base font-normal",

			bodySm:
				"text-sm font-normal",

			caption:
				"text-xs font-normal text-muted-foreground",

			overline:
				"text-xs font-medium uppercase tracking-widest text-muted-foreground",
		},
	},

	defaultVariants: {
		variant: "body",
	},
});

export const typographyVariantOptions = [
	"display",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"bodyLg",
	"body",
	"bodySm",
	"caption",
	"overline",
] as const;

export type TypographyVariant =
	(typeof typographyVariantOptions)[number];

export type TypographyElement =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "p"
	| "span"
	| "div";