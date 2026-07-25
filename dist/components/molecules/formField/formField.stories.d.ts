import { StoryObj } from '@storybook/nextjs-vite';
import { default as FormField } from './formField';
/**
 * Reusable FormField molecule that provides
 * consistent form layouts with labels,
 * required indicators, helper text,
 * and validation error messages.
 *
 * It wraps input components such as Input,
 * PasswordField, Dropdown, and Checkbox.
 */
declare const meta: {
    title: string;
    component: ({ className, label, required, description, errorMessage, children, spacing, ...props }: import('./formField').FormFieldProps) => import("react").JSX.Element;
    tags: string[];
    args: {
        label: string;
        description: string;
        required: false;
        spacing: "md";
    };
    argTypes: {
        spacing: {
            control: "radio";
            options: readonly ["sm", "md"];
            description: string;
        };
        required: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof FormField>;
export declare const Playground: Story;
export declare const Default: Story;
export declare const Required: Story;
export declare const Error: Story;
export declare const WithPasswordField: Story;
