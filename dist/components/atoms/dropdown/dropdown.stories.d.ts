import { StoryObj } from '@storybook/nextjs-vite';
import { default as Dropdown } from './dropdown';
/**
 * Reusable Dropdown component that supports
 * different sizes, validation states, required fields,
 * helper text, error messages, and disabled states.
 * It provides an accessible selection control
 * with keyboard navigation and responsive layouts.
 */
declare const meta: {
    title: string;
    component: {
        ({ label, placeholder, helperText, errorMessage, required, size, state, children, ...props }: import('./dropdown').DropdownProps): import("react").JSX.Element;
        Item: import('react').ForwardRefExoticComponent<Omit<import('@radix-ui/react-select').SelectItemProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
    };
    tags: string[];
    args: {
        label: string;
        placeholder: string;
        size: "md";
        state: "default";
        required: false;
        disabled: false;
    };
    argTypes: {
        size: {
            control: "radio";
            options: readonly ["sm", "md"];
            description: string;
        };
        state: {
            control: "radio";
            options: readonly ["default", "error"];
            description: string;
        };
        required: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof Dropdown>;
export declare const Playground: Story;
export declare const Default: Story;
export declare const Required: Story;
export declare const Error: Story;
export declare const Disabled: Story;
export declare const Small: Story;
