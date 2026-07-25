import { ReactNode, HTMLAttributes } from 'react';
import { EmptyStateSize } from './emptyState.constants';
export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
    icon?: ReactNode;
    title: string;
    description?: string;
    action?: ReactNode;
    size?: EmptyStateSize;
}
declare const EmptyState: ({ className, icon, title, description, action, size, ...props }: EmptyStateProps) => import("react").JSX.Element;
export default EmptyState;
