export const buttonSizes = {
	sm: {
		height: "h-8",
		padding: "px-3",
		text: "text-sm",
		icon: "size-3",
	},

	md: {
		// 44px - Apple's recommended minimum touch target
		height: "h-11",
		padding: "px-4",
		text: "text-sm",
		icon: "size-4",
	},

	lg: {
		// 48px - Material Design touch target
		height: "h-12",
		padding: "px-6",
		text: "text-base",
		icon: "size-5",
	},

	"icon-sm": {
		height: "size-8",
		padding: "p-3",
		icon: "size-3",
	},

	"icon-md": {
		height: "size-10",
		padding: "p-4",
		icon: "size-4",
	},

	"icon-lg": {
		height: "size-12",
		padding: "p-6",
		icon: "size-5",
	},
} as const;

export const buttonVariants = ["primary", "secondary", "text", "link"] as const;

export const buttonWidths = ["auto", "full"] as const;

export type ButtonSize = keyof typeof buttonSizes;

export type ButtonVariant = (typeof buttonVariants)[number];

export type ButtonWidth = (typeof buttonWidths)[number];
