import { StoryObj } from '@storybook/nextjs-vite';
import { default as Button } from './button';
/**
 * Reusable Button component that supports
 * different variants, sizes, widths, and icon positions.
 * It can render leading or trailing icons,
 * handle disabled states, and adapt across responsive layouts.
 */
declare const meta: {
    title: string;
    component: typeof Button;
    tags: string[];
    args: {
        children: string;
        variant: "primary";
        size: "lg";
        width: "auto";
        disabled: false;
        loading: false;
        onClick: import('storybook/test').Mock<(...args: any[]) => any>;
    };
    argTypes: {
        variant: {
            control: "radio";
            options: readonly ["primary", "secondary", "text", "link"];
            description: string;
        };
        size: {
            control: "radio";
            options: string[];
            description: string;
        };
        width: {
            control: "radio";
            options: readonly ["auto", "full"];
            description: string;
        };
        iconPosition: {
            control: "radio";
            options: string[];
            description: string;
        };
        disabled: {
            control: "boolean";
            description: string;
        };
        loading: {
            control: "boolean";
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof Button>;
export declare const Playground: Story;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Text: Story;
export declare const Link: Story;
export declare const Small: Story;
export declare const Large: Story;
export declare const LeadingIcon: Story;
export declare const TrailingIcon: Story;
export declare const IconOnly: Story;
export declare const Danger: Story;
export declare const FullWidth: Story;
export declare const Disabled: Story;
