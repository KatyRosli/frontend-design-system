export declare const checkboxConfig: {
    readonly box: "size-5";
    readonly icon: "size-4";
    readonly gap: "gap-spacing-md";
    readonly hitArea: "min-h-11 min-w-11";
};
export declare const checkboxVariants: {
    readonly default: "border-border";
    readonly error: "border-danger";
};
export declare const checkboxStates: readonly ["default", "checked", "indeterminate", "disabled", "error"];
export type CheckboxVariant = keyof typeof checkboxVariants;
export type CheckboxState = (typeof checkboxStates)[number];
