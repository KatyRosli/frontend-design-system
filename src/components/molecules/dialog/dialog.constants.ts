import { cva } from "class-variance-authority";

export const dialogPopupVariants = ["center", "right", "left", "bottom"] as const;
export type DialogPopupVariant = (typeof dialogPopupVariants)[number];

export const dialogPopupSizes = ["sm", "md", "lg"] as const;
export type DialogPopupSize = (typeof dialogPopupSizes)[number];

// NOTE: widths below are deliberately arbitrary values (not Tailwind's
// named max-w-sm/md/lg or w-sm/md/lg utilities). This design system's
// tokens.css defines --spacing-xs/sm/md/lg/xl for component sizing, and
// Tailwind v4 resolves named scale keys (max-w-*, w-*, h-*, gap-* etc.)
// through that same --spacing-{key} namespace - so max-w-md/lg/xl and
// friends silently resolve to those component tokens (0.5rem-2rem)
// instead of Tailwind's real defaults, anywhere in the app.
export const dialogBackdropVariants = cva([
  "fixed inset-0 z-50",
  "bg-black/40",
  "transition-opacity duration-200",
  "data-[starting-style]:opacity-0",
  "data-[ending-style]:opacity-0",
]);

export const dialogPopupVariantStyles = cva(
  [
    "fixed z-50 flex flex-col",
    "bg-background text-foreground shadow-xl outline-none",
    "transition-all duration-200",
  ],
  {
    variants: {
      variant: {
        center: [
          "inset-0 m-auto h-fit max-h-[calc(100vh-3rem)] w-[calc(100%-3rem)]",
          "overflow-y-auto rounded-2xl border border-border",
          "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
          "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
        ],
        right: [
          "inset-0 overflow-y-auto",
          "sm:inset-y-0 sm:left-auto sm:right-0 sm:border-l sm:border-border",
          "data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full",
        ],
        left: [
          "inset-0 overflow-y-auto",
          "sm:inset-y-0 sm:left-0 sm:right-auto sm:border-r sm:border-border",
          "data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full",
        ],
        bottom: [
          "inset-0 overflow-y-auto",
          "sm:inset-x-0 sm:top-auto sm:bottom-0 sm:border-t sm:border-border",
          "data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full",
        ],
      },

      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },

    compoundVariants: [
      { variant: "center", size: "sm", className: "sm:max-w-[24rem]" },
      { variant: "center", size: "md", className: "sm:max-w-[32rem]" },
      { variant: "center", size: "lg", className: "sm:max-w-[40rem]" },
      { variant: "right", size: "sm", className: "sm:w-[20rem]" },
      { variant: "right", size: "md", className: "sm:w-[28rem]" },
      { variant: "right", size: "lg", className: "sm:w-[36rem]" },
      { variant: "left", size: "sm", className: "sm:w-[20rem]" },
      { variant: "left", size: "md", className: "sm:w-[28rem]" },
      { variant: "left", size: "lg", className: "sm:w-[36rem]" },
      { variant: "bottom", size: "sm", className: "sm:h-[16rem]" },
      { variant: "bottom", size: "md", className: "sm:h-[16rem]" },
      { variant: "bottom", size: "lg", className: "sm:h-[24rem]" },
    ],

    defaultVariants: {
      variant: "center",
      size: "md",
    },
  },
);
