import { StoryObj } from '@storybook/nextjs-vite';
import { default as Input } from './input';
/**
 * Reusable Input component that supports
 * different sizes, validation states,
 * disabled states, and responsive layouts.
 * It provides a consistent text input control
 * for forms and user data entry.
 */
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<Omit<import('./input').InputProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
    tags: string[];
    args: {
        placeholder: string;
        size: "lg";
        state: "default";
        disabled: false;
    };
    argTypes: {
        size: {
            control: "radio";
            options: readonly ["sm", "lg"];
            description: string;
        };
        state: {
            control: "radio";
            options: readonly ["default", "error"];
            description: string;
        };
        disabled: {
            control: "boolean";
        };
        placeholder: {
            control: "text";
        };
    };
};
export default meta;
type Story = StoryObj<typeof Input>;
export declare const Playground: Story;
export declare const Default: Story;
export declare const Small: Story;
export declare const Large: Story;
export declare const Error: Story;
export declare const Disabled: Story;
export declare const Password: Story;
export declare const WithLeadingIcon: Story;
export declare const WithTrailingIcon: Story;
