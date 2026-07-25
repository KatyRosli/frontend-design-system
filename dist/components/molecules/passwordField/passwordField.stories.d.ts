import { StoryObj } from '@storybook/nextjs-vite';
import { default as PasswordField } from './passwordField';
/**
 * Reusable PasswordField molecule that supports
 * password visibility toggling with an eye icon,
 * different icon sizes, disabled states,
 * and accessible password input interactions.
 *
 * It combines the Input atom with a visibility toggle
 * control for secure password entry.
 */
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<Omit<import('./passwordField').PasswordFieldProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
    tags: string[];
    args: {
        placeholder: string;
        disabled: false;
        iconSize: "lg";
    };
    argTypes: {
        iconSize: {
            control: "radio";
            options: readonly ["sm", "lg"];
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
type Story = StoryObj<typeof PasswordField>;
export declare const Playground: Story;
export declare const Default: Story;
export declare const SmallIcon: Story;
export declare const LargeIcon: Story;
export declare const Disabled: Story;
export declare const WithValue: Story;
