export declare const spinnerSizes: readonly ["sm", "md", "lg"];
export declare const spinnerVariants: readonly ["default", "muted", "inverse"];
export type SpinnerSize = (typeof spinnerSizes)[number];
export type SpinnerVariant = (typeof spinnerVariants)[number];
export declare const spinnerVariantsStyles: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    variant?: "default" | "muted" | "inverse" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
