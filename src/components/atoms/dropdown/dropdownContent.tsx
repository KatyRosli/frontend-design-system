import React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";

import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import Icon from "@/foundations/icon";

import { cn } from "@/lib/utils";

import {
  dropdownContentVariants,
  type DropdownSize,
} from "./dropdown.constants";


const DropdownContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    size?: DropdownSize;
  }
>(
  ({ className, children, size, ...props }, ref) => (
    <SelectPrimitive.Portal>

      <SelectPrimitive.Content
        ref={ref}
        position="popper"
        side="bottom"
        align="start"
        sideOffset={8}
        className={cn(
          dropdownContentVariants({
          }),
          className,
        )}
        {...props}
      >

        <SelectPrimitive.ScrollUpButton className="flex justify-center py-1">
          <Icon
            icon={ChevronUp}
            size="sm"
          />
        </SelectPrimitive.ScrollUpButton>


        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>


        <SelectPrimitive.ScrollDownButton className="flex justify-center py-1">
          <Icon
            icon={ChevronDown}
            size="sm"
          />
        </SelectPrimitive.ScrollDownButton>


      </SelectPrimitive.Content>

    </SelectPrimitive.Portal>
  ),
);

DropdownContent.displayName =
  SelectPrimitive.Content.displayName;


export default DropdownContent;
