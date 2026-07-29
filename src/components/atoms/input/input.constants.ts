import { cva } from "class-variance-authority";

import { typographyVariants } from "@/foundations/typography";

export const inputSizes = ["sm", "lg"] as const;

export const inputStates = ["default", "error"] as const;

export type InputSize = (typeof inputSizes)[number];

export type InputState = (typeof inputStates)[number];
export const inputVariants = cva(
  [
	typographyVariants({
    variant: "bodyMd",
  }),

    "flex w-full",

    "rounded-md",

    "border",

    "bg-background",

    "text-text-primary",

    "placeholder:text-text-secondary",

    "transition-colors",

    "outline-none",

    "focus-visible:ring-2",

    "disabled:pointer-events-none",

    "disabled:opacity-50",
  ],
  {
    variants: {
      size: {
        sm: "h-9 px-3",

        lg: "h-11 px-4",
      },

      state: {
        default: "border-input hover:border-primary",

        error: "border-danger focus-visible:ring-danger",
      },
    },

    defaultVariants: {
      size: "lg",
      state: "default",
    },
  },
);
