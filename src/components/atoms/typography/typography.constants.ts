import { cva } from "class-variance-authority";

export const typographyVariants = cva(
  [
    "antialiased",
    "text-foreground",
  ],
  {
    variants: {
      variant: {
        display:
          "text-5xl font-bold leading-tight tracking-tight",

        h1:
          "text-4xl font-bold leading-tight tracking-tight",

        h2:
          "text-3xl font-semibold leading-tight tracking-tight",

        h3:
          "text-2xl font-semibold leading-snug",

        h4:
          "text-xl font-semibold leading-snug",

        h5:
          "text-lg font-medium leading-snug",

        h6:
          "text-base font-medium leading-snug",

        bodyLg:
          "text-lg font-normal leading-8",

        body:
          "text-base font-normal leading-7",

        bodySm:
          "text-sm font-normal leading-6",

        caption:
          "text-xs font-normal leading-5 text-muted-foreground",

        overline:
          "text-xs font-medium uppercase tracking-widest leading-5 text-muted-foreground",
      },
    },

    defaultVariants: {
      variant: "body",
    },
  },
);

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
