import { VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';
import { CheckboxVariant } from './checkbox.constants';
declare const checkboxStyles: (props?: ({
    variant?: "default" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CheckboxProps extends Omit<ComponentProps<"input">, "size">, VariantProps<typeof checkboxStyles> {
    label?: ReactNode;
    description?: ReactNode;
    required?: boolean;
    errorMessage?: ReactNode;
    indeterminate?: boolean;
    variant?: CheckboxVariant;
}
export default function Checkbox({ label, description, required, errorMessage, indeterminate, variant, className, disabled, ...props }: CheckboxProps): import("react").JSX.Element;
export {};
