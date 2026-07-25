export declare const buttonSizes: {
    readonly sm: {
        readonly height: "h-11 md:h-10";
        readonly padding: "px-4 md:px-4 lg:px-5";
        readonly text: "text-sm";
        readonly icon: "size-4";
    };
    readonly lg: {
        readonly height: "h-12 md:h-11";
        readonly padding: "px-5 md:px-5 lg:px-6";
        readonly text: "text-sm md:text-base";
        readonly icon: "size-5";
    };
};
export declare const buttonVariants: readonly ["primary", "secondary", "text", "link"];
export declare const buttonWidths: readonly ["auto", "full"];
export type ButtonSize = keyof typeof buttonSizes;
export type ButtonVariant = (typeof buttonVariants)[number];
export type ButtonWidth = (typeof buttonWidths)[number];
