export const loginFormVariants = ["default"] as const;

export type LoginFormVariant = (typeof loginFormVariants)[number];
