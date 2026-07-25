import { HTMLAttributes } from 'react';
import { SpinnerSize, SpinnerVariant } from './spinner.constants';
export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: SpinnerSize;
    variant?: SpinnerVariant;
    ariaLabel?: string;
}
declare const Spinner: ({ className, size, variant, ariaLabel, ...props }: SpinnerProps) => import("react").JSX.Element;
export default Spinner;
