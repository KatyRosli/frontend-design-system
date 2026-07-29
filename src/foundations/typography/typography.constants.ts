import { cva } from "class-variance-authority";

export const typographyVariants = cva(
  [
    "antialiased",
    "text-foreground",
  ],
  {
    variants: {
      variant: {

        // =====================
        // Display
        // =====================

        display:
          "[font-family:var(--font-heading)] text-5xl font-bold leading-tight tracking-tight",


        // =====================
        // Headings
        // =====================

        h1:
          "[font-family:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight",

        h2:
          "[font-family:var(--font-heading)] text-3xl font-semibold leading-tight tracking-tight",

        h3:
          "[font-family:var(--font-heading)] text-2xl font-semibold leading-snug",

        h4:
          "[font-family:var(--font-heading)] text-xl font-semibold leading-snug",

        h5:
          "[font-family:var(--font-heading)] text-lg font-medium leading-snug",

        h6:
          "[font-family:var(--font-heading)] text-base font-medium leading-snug",


        // =====================
        // Body
        // =====================

        bodyLg:
          "[font-family:var(--font-body)] text-lg font-normal leading-8",

        bodyMd:
          "[font-family:var(--font-body)] text-base font-normal leading-7",

        bodySm:
          "[font-family:var(--font-body)] text-sm font-normal leading-6",


        // =====================
        // Labels / Actions
        // =====================

        labelLg:
          "[font-family:var(--font-body)] text-base font-semibold leading-6",

        labelMd:
          "[font-family:var(--font-body)] text-sm font-semibold leading-5",

        labelSm:
          "[font-family:var(--font-body)] text-xs font-semibold leading-4",


        // =====================
        // Supporting
        // =====================

        caption:
          "[font-family:var(--font-body)] text-xs font-normal leading-5",

        overline:
          "[font-family:var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em]",
      },
    },

    defaultVariants: {
      variant: "bodyMd",
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
  "bodyMd",
  "bodySm",

  "labelLg",
  "labelMd",
  "labelSm",

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
  | "label"
  | "span"
  | "div";
  