import { DropdownSize, DropdownState } from './dropdown.constants';
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
export interface DropdownProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
    label?: string;
    placeholder?: string;
    helperText?: string;
    errorMessage?: string;
    required?: boolean;
    size?: DropdownSize;
    state?: DropdownState;
    children: React.ReactNode;
}
declare const Dropdown: {
    ({ label, placeholder, helperText, errorMessage, required, size, state, children, ...props }: DropdownProps): React.JSX.Element;
    Item: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
declare const DropdownTrigger: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
    size?: DropdownSize;
    state?: DropdownState;
} & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    size?: DropdownSize;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Dropdown;
export { DropdownTrigger, DropdownContent, DropdownItem };
