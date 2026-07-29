import Typography from "@/foundations/typography";
import Icon from "@/foundations/icon";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React from "react";
import { DropdownSize, DropdownState, dropdownTriggerVariants } from "./dropdown.constants";
import * as SelectPrimitive from "@radix-ui/react-select";

const DropdownTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    size?: DropdownSize;
    state?: DropdownState;
  }
>(
  ({ className, size, state, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        dropdownTriggerVariants({
          size,
          state,
        }),
        className,
      )}
      {...props}
    >
      <Typography
        as="span"
        variant="bodyMd"
      >
        {children}
      </Typography>

      <SelectPrimitive.Icon asChild>
        <Icon
          icon={ChevronDown}
          size="sm"
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  ),
);

DropdownTrigger.displayName = SelectPrimitive.Trigger.displayName;

export default DropdownTrigger;
