/**
 * Reusable Skeleton component
 * used as a loading placeholder.
 *
 * Supports different shapes:
 * - text
 * - circle
 * - rectangle
 *
 * Dimensions should be controlled
 * through className to match the
 * component being replaced.
 */
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<import('.').SkeletonProps & import('react').RefAttributes<HTMLDivElement>>;
    args: {
        variant: "rectangle";
        className: string;
    };
    argTypes: {
        variant: {
            description: string;
            control: {
                type: "radio";
            };
            options: string[];
        };
        className: {
            description: string;
        };
    };
    tags: string[];
};
export default meta;
export declare const Default: {};
export declare const Text: {
    args: {
        variant: "text";
        className: string;
    };
};
export declare const Circle: {
    args: {
        variant: "circle";
        className: string;
    };
};
export declare const Rectangle: {
    args: {
        variant: "rectangle";
        className: string;
    };
};
export declare const AvatarSkeleton: {
    args: {
        variant: "circle";
        className: string;
    };
};
export declare const CardSkeleton: {
    render: () => import("react").JSX.Element;
};
export declare const ProfileSkeleton: {
    render: () => import("react").JSX.Element;
};
