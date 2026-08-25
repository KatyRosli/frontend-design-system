export const cardVariants = {
  default: "default",
  outlined: "outlined",
  elevated: "elevated",
} as const;

export type CardVariant =
  (typeof cardVariants)[keyof typeof cardVariants];
