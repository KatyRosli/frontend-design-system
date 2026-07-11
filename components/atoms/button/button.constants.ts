export const buttonSizes = {
	// 44px - Apple's recommended minimum touch target
	// 48px - Material Design touch target
	sm: {
		height: "h-11 md:h-10",
		padding: "px-4 md:px-4 lg:px-5",
		text: "text-sm",
		icon: "size-4",
	},

	lg: {
		height: "h-12 md:h-11",
		padding: "px-5 md:px-5 lg:px-6",
		text: "text-sm md:text-base",
		icon: "size-5",
	},
} as const;


export const buttonVariants = [
	"primary",
	"secondary",
	"text",
	"link",
] as const;


export const buttonWidths = [
	"auto",
	"full",
] as const;


export type ButtonSize = keyof typeof buttonSizes;

export type ButtonVariant = (typeof buttonVariants)[number];

export type ButtonWidth = (typeof buttonWidths)[number];
