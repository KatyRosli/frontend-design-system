import Typography from "@/foundations/typography";
import { cn } from "@/lib/utils";
import Icon from "@/foundations/icon";
import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "lucide-react";

const DropdownItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(
({ className, children, ...props }, ref) => (

<SelectPrimitive.Item
  ref={ref}
  className={cn(
    "flex w-full cursor-default items-center rounded-md px-3 py-2",
    "outline-none",
    "focus:bg-accent",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    className,
  )}
  {...props}
>


<SelectPrimitive.ItemIndicator className="mr-2 flex h-4 w-4">
  <Icon
    icon={Check}
    size="sm"
  />
</SelectPrimitive.ItemIndicator>


<SelectPrimitive.ItemText asChild>

<Typography
  as="span"
  variant="bodyMd"
  className="text-text-primary"
>
  {children}
</Typography>

</SelectPrimitive.ItemText>


</SelectPrimitive.Item>

));


DropdownItem.displayName =
  SelectPrimitive.Item.displayName;

export default DropdownItem;