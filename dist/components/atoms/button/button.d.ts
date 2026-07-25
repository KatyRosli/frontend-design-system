import { VariantProps } from 'class-variance-authority';
import { ReactNode, ComponentProps } from 'react';
declare const buttonStyles: (props?: ({
    variant?: "link" | "text" | "primary" | "secondary" | null | undefined;
    size?: "sm" | "lg" | null | undefined;
    width?: "auto" | "full" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles> & {
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    loading?: boolean;
};
export default function Button({ variant, size, width, loading, icon, iconPosition, children, className, disabled, ...props }: ButtonProps): import("react").JSX.Element;
export {};
