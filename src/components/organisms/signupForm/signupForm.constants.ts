export const signupFormVariants = ["default"] as const;

export type SignupFormVariant = (typeof signupFormVariants)[number];