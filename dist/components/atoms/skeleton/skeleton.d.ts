import { HTMLAttributes } from 'react';
import { SkeletonVariant } from './skeleton.constants';
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    variant?: SkeletonVariant;
}
declare const Skeleton: import('react').ForwardRefExoticComponent<SkeletonProps & import('react').RefAttributes<HTMLDivElement>>;
export default Skeleton;
