export declare const checkboxConfig: {
    readonly box: "size-5";
    readonly icon: "size-4";
    readonly text: "text-sm";
    readonly description: "text-sm";
    readonly gap: "gap-3";
    readonly hitArea: "min-h-11 min-w-11";
};
export declare const checkboxVariants: {
    readonly default: "border-input";
    readonly error: "border-destructive";
};
export declare const checkboxStates: readonly ["default", "checked", "indeterminate", "disabled", "error"];
export type CheckboxVariant = keyof typeof checkboxVariants;
export type CheckboxState = (typeof checkboxStates)[number];
