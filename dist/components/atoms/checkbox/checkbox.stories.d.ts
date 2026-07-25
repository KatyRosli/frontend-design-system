import { StoryObj } from '@storybook/nextjs-vite';
import { default as Checkbox } from './checkbox';
/**
 * Reusable Checkbox component that supports
 * different sizes, validation states, required fields,
 * descriptions, error messages, and indeterminate states.
 * It provides accessible selection controls
 * for forms and multi-selection patterns.
 */
declare const meta: {
    title: string;
    component: typeof Checkbox;
    tags: string[];
    args: {
        label: string;
        description: string;
        onChange: import('storybook/test').Mock<(...args: any[]) => any>;
    };
    argTypes: {
        variant: {
            control: "radio";
            options: string[];
            description: string;
        };
        disabled: {
            control: "boolean";
        };
        indeterminate: {
            control: "boolean";
        };
        required: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof Checkbox>;
export declare const Default: Story;
export declare const Checked: Story;
export declare const Indeterminate: Story;
export declare const Disabled: Story;
export declare const Required: Story;
export declare const Error: Story;
export declare const WithoutDescription: Story;
