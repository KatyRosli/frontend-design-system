import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import { AvatarStatus } from './avatar.constants';
declare const avatarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type AvatarVariantProps = VariantProps<typeof avatarVariants>;
export interface AvatarProps extends ComponentPropsWithoutRef<"div">, AvatarVariantProps {
    src?: string;
    alt?: string;
    name?: string;
    fallback?: ReactNode;
    status?: AvatarStatus;
}
declare const Avatar: import('react').ForwardRefExoticComponent<AvatarProps & import('react').RefAttributes<HTMLDivElement>>;
export default Avatar;
