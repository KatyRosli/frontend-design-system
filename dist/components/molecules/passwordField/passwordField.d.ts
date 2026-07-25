import { ComponentProps } from 'react';
import { default as Input } from '../../atoms/input';
import { PasswordFieldSize } from './passwordField.constants';
export interface PasswordFieldProps extends Omit<ComponentProps<typeof Input>, "type"> {
    toggleLabel?: string;
    iconSize?: PasswordFieldSize;
}
declare const PasswordField: import('react').ForwardRefExoticComponent<Omit<PasswordFieldProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export default PasswordField;
