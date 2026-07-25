import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { AvatarStatus } from './avatar.constants';
declare const avatarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type AvatarVariantProps = VariantProps<typeof avatarVariants>;
export type AvatarProps = ComponentPropsWithoutRef<"div"> & AvatarVariantProps & {
    status?: AvatarStatus;
    fallback?: ReactNode;
    src?: string;
    alt?: string;
};
declare const Avatar: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & AvatarVariantProps & {
    status?: AvatarStatus;
    fallback?: ReactNode;
    src?: string;
    alt?: string;
} & import('react').RefAttributes<HTMLDivElement>>;
export default Avatar;
