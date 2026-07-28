export const iconSizes = {
  xs: "size-3",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-8",
} as const;


export const iconSizeOptions = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
] as const;


export type IconSize =
  (typeof iconSizeOptions)[number];
