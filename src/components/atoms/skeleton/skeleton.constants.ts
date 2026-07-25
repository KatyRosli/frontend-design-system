export const skeletonVariants = {
	text: "text",
	circle: "circle",
	rectangle: "rectangle",
} as const;

export type SkeletonVariant =
	(typeof skeletonVariants)[keyof typeof skeletonVariants];
