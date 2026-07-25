import { StoryObj } from '@storybook/nextjs-vite';
import { default as Spinner } from './spinner';
/**
 * Reusable Spinner component that supports
 * different sizes and visual variants.
 * It provides a lightweight loading indicator
 * for asynchronous states, buttons, and page loading.
 */
declare const meta: {
    title: string;
    component: ({ className, size, variant, ariaLabel, ...props }: import('./spinner').SpinnerProps) => import("react").JSX.Element;
    tags: string[];
    args: {
        size: "md";
        variant: "default";
        ariaLabel: string;
    };
    argTypes: {
        size: {
            control: "radio";
            options: readonly ["sm", "md", "lg"];
            description: string;
        };
        variant: {
            control: "radio";
            options: readonly ["default", "muted", "inverse"];
            description: string;
        };
        ariaLabel: {
            control: "text";
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof Spinner>;
export declare const Playground: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const Muted: Story;
export declare const Inverse: Story;
