import * as React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";

import Typography from "@/foundations/typography";

import DropdownTrigger from "./dropdownTrigger";
import DropdownContent from "./dropdownContent";
import DropdownItem from "./dropdownItem";

import {
  type DropdownSize,
  type DropdownState,
} from "./dropdown.constants";

export interface DropdownProps
extends React.ComponentPropsWithRef<typeof SelectPrimitive.Root> {
	label?: string;
	placeholder?: string;
	helperText?: string;
	errorMessage?: string;
	required?:boolean;
	size?: DropdownSize;
	state?: DropdownState;
	children: React.ReactNode;
}

type DropdownComponent = React.FC<DropdownProps> & {
	Item: typeof DropdownItem;
}

const Dropdown = ({
  label,
  placeholder = "Select option",
  helperText,
  errorMessage,
  required = false,
  size = "md",
  state = "default",
  children,
  ...props
}: DropdownProps) => {

  const hasError = state === "error";

  return (
    <div className="flex w-full flex-col gap-2">

      {label && (
        <Typography
          as="label"
          variant="labelMd"
          className="text-text-primary"
        >
          {label}

          {required && (
            <Typography
              as="label"
              variant="labelMd"
              className="ml-1 text-danger"
            >
              *
            </Typography>
          )}
        </Typography>
      )}

      <SelectPrimitive.Root {...props}>

        <DropdownTrigger
          size={size}
          state={hasError ? "error" : "default"}
        >
          <SelectPrimitive.Value className="font-inherit" placeholder={placeholder} />
        </DropdownTrigger>

        <DropdownContent size={size}>
          {children}
        </DropdownContent>

      </SelectPrimitive.Root>


      {hasError && errorMessage ? (
        <Typography
          as="p"
          variant="bodySm"
          className="text-danger"
        >
          {errorMessage}
        </Typography>
      ) : helperText ? (
        <Typography
          as="p"
          variant="bodySm"
          className="text-text-secondary"
        >
          {helperText}
        </Typography>
      ) : null}

    </div>
  );
};

Dropdown.Item = DropdownItem;

export default Dropdown as DropdownComponent;
