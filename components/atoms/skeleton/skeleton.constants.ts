export const skeletonVariants = {
	text: "text",
	circle: "circle",
	rectangle: "rectangle",
	card: "card",
} as const;

export const skeletonSizes = {
	sm: "sm",
	md: "md",
	lg: "lg",
} as const;

export type SkeletonVariant =
	(typeof skeletonVariants)[keyof typeof skeletonVariants];

export type SkeletonSize = (typeof skeletonSizes)[keyof typeof skeletonSizes];
