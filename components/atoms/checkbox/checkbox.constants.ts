export const checkboxSizes = {
	sm: {
		box: "size-4",
		icon: "size-3",
		text: "text-sm",
		description: "text-xs",
		gap: "gap-2",
	},

	md: {
		box: "size-5",
		icon: "size-4",
		text: "text-sm",
		description: "text-sm",
		gap: "gap-3",
	},

	lg: {
		box: "size-6",
		icon: "size-5",
		text: "text-base",
		description: "text-sm",
		gap: "gap-3",
	},
} as const;

export const checkboxVariants = {
	default: "border-input",

	error: "border-destructive",
} as const;

export const checkboxStates = [
	"default",
	"checked",
	"indeterminate",
	"disabled",
	"error",
] as const;

export type CheckboxSize = keyof typeof checkboxSizes;

export type CheckboxVariant = keyof typeof checkboxVariants;

export type CheckboxState = (typeof checkboxStates)[number];
