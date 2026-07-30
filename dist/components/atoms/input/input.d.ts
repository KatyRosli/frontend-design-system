import { ComponentProps, ReactNode } from 'react';
import { InputSize, InputState } from './input.constants';
export interface InputProps extends Omit<ComponentProps<"input">, "size"> {
    label?: string;
    helperText?: string;
    errorMessage?: string;
    size?: InputSize;
    state?: InputState;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}
declare const Input: import('react').ForwardRefExoticComponent<Omit<InputProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export default Input;
