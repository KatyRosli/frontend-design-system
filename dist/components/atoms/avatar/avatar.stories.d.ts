/**
 * Reusable Avatar component
 * that supports different sizes
 * and renders a placeholder image
 * when src attribute is not provided.
 * It also shows a presence indicator
 * when user is online.
 */
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    } & {
        status?: import('./avatar.constants').AvatarStatus;
        fallback?: import('react').ReactNode;
        src?: string;
        alt?: string;
    } & import('react').RefAttributes<HTMLDivElement>>;
    args: {
        src: string;
        alt: string;
        size: "md";
        status: undefined;
        onClick: import('storybook/test').Mock<(...args: any[]) => any>;
    };
    argTypes: {
        size: {
            description: string;
            control: {
                type: "radio";
            };
            options: string[];
        };
        status: {
            description: string;
            control: {
                type: "radio";
            };
            options: (string | undefined)[];
        };
        src: {
            description: string;
        };
        fallback: {
            control: false;
        };
    };
    tags: string[];
};
export default meta;
export declare const Default: {};
export declare const AllSizes: {
    render: () => import("react").JSX.Element;
};
export declare const AllStatuses: {
    render: () => import("react").JSX.Element;
};
export declare const Placeholder: {
    args: {
        src: undefined;
    };
};
export declare const InitialsFallback: {
    args: {
        src: undefined;
        fallback: string;
    };
};
export declare const BrokenImage: {
    args: {
        src: string;
    };
};
export declare const Clickable: {
    args: {
        onClick: import('storybook/test').Mock<(...args: any[]) => any>;
    };
    play: ({ args }: import('storybook/internal/csf').PlayFunctionContext<import('@storybook/react').ReactRenderer, Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    } & {
        status?: import('./avatar.constants').AvatarStatus;
        fallback?: import('react').ReactNode;
        src?: string;
        alt?: string;
    } & import('react').RefAttributes<HTMLDivElement>>) => Promise<void>;
};
export declare const DynamicStatus: {
    argTypes: {
        status: {
            control: false;
        };
    };
    render: (args: Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    } & {
        status?: import('./avatar.constants').AvatarStatus;
        fallback?: import('react').ReactNode;
        src?: string;
        alt?: string;
    } & import('react').RefAttributes<HTMLDivElement>) => import("react").JSX.Element;
};
