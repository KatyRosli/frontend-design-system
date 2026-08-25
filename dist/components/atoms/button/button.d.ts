import { VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';
declare const buttonStyles: (props?: ({
    variant?: "link" | "text" | "primary" | "secondary" | "tertiary" | "outline" | "success" | "danger" | null | undefined;
    size?: "sm" | "lg" | null | undefined;
    width?: "auto" | "full" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles> & {
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    loading?: boolean;
    iconOnly?: boolean;
};
export default function Button({ variant, size, width, icon, iconOnly, iconPosition, loading, children, className, disabled, ...props }: ButtonProps): import("react").JSX.Element;
export {};
