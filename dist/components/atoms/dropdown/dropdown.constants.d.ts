export declare const dropdownSizes: readonly ["sm", "md"];
export declare const dropdownStates: readonly ["default", "error"];
export type DropdownSize = (typeof dropdownSizes)[number];
export type DropdownState = (typeof dropdownStates)[number];
export declare const dropdownTriggerVariants: (props?: ({
    size?: "sm" | "md" | null | undefined;
    state?: "default" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const dropdownContentVariants: (props?: ({
    size?: "sm" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
