import { default as DropdownItem } from './dropdownItem';
import { DropdownSize, DropdownState } from './dropdown.constants';
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
export interface DropdownProps extends React.ComponentPropsWithRef<typeof SelectPrimitive.Root> {
    label?: string;
    placeholder?: string;
    helperText?: string;
    errorMessage?: string;
    required?: boolean;
    size?: DropdownSize;
    state?: DropdownState;
    children: React.ReactNode;
}
type DropdownComponent = React.FC<DropdownProps> & {
    Item: typeof DropdownItem;
};
declare const _default: DropdownComponent;
export default _default;
