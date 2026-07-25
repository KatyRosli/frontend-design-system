export declare const inputSizes: readonly ["sm", "lg"];
export declare const inputStates: readonly ["default", "error"];
export type InputSize = (typeof inputSizes)[number];
export type InputState = (typeof inputStates)[number];
export declare const inputVariants: (props?: ({
    size?: "sm" | "lg" | null | undefined;
    state?: "default" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
