import { cva } from "class-variance-authority";

export const appearanceToggleVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "border",
    "border-border",
    "bg-background",
    "text-foreground",
    "transition-colors",
    "hover:bg-muted",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ],
  {
    variants: {
      size: {
        sm: ["h-8", "w-8"],
        md: ["h-9", "w-9"],
        lg: ["h-10", "w-10"],
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

export const appearanceToggleSizes = ["sm", "md", "lg"] as const;

export type AppearanceToggleSize =
  (typeof appearanceToggleSizes)[number];

export const appearanceModes = ["light", "dark"] as const;

export type AppearanceMode =
  (typeof appearanceModes)[number];

  