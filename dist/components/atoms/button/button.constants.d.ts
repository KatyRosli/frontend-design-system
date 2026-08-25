export declare const buttonSizes: {
    readonly sm: {
        readonly height: "h-10";
        readonly padding: "px-4";
        readonly label: "labelMd";
        readonly icon: "size-4";
    };
    readonly lg: {
        readonly height: "h-12";
        readonly padding: "px-6";
        readonly label: "labelLg";
        readonly icon: "size-5";
    };
};
export declare const buttonVariants: readonly ["primary", "secondary", "tertiary", "outline", "success", "danger", "text", "link"];
export declare const buttonWidths: readonly ["auto", "full"];
export type ButtonSize = keyof typeof buttonSizes;
export type ButtonVariant = (typeof buttonVariants)[number];
export type ButtonWidth = (typeof buttonWidths)[number];
