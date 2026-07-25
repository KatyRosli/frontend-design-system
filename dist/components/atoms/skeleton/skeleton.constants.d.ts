export declare const skeletonVariants: {
    readonly text: "text";
    readonly circle: "circle";
    readonly rectangle: "rectangle";
};
export type SkeletonVariant = (typeof skeletonVariants)[keyof typeof skeletonVariants];
