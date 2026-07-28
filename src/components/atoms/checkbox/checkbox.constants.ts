export const checkboxConfig = {
	box: "size-5",

	icon: "size-4",

	gap: "gap-spacing-md",

	// Minimum accessible touch target
	//following the UX rule: md as default because most mature systems (Material, Carbon, Fluent) avoid too many checkbox sizes.
	hitArea: "min-h-11 min-w-11",
} as const;

export const checkboxVariants = {
	default: "border-border",

	error: "border-danger",
} as const;

export const checkboxStates = [
	"default",
	"checked",
	"indeterminate",
	"disabled",
	"error",
] as const;

export type CheckboxVariant = keyof typeof checkboxVariants;

export type CheckboxState = (typeof checkboxStates)[number];
