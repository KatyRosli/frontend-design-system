export declare const formFieldVariants: (props?: ({
    spacing?: "sm" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const formFieldMessageVariants: (props?: ({
    state?: "default" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const formFieldSpacings: readonly ["sm", "md"];
export type FormFieldSpacing = (typeof formFieldSpacings)[number];
