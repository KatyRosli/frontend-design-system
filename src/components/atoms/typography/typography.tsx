import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import {
  typographyVariants,
  type TypographyVariant,
  type TypographyElement,
} from "./typography.constants";

export interface TypographyProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  variant?: TypographyVariant;

  as?: TypographyElement;
}

export default function Typography({
  children,
  variant = "body",
  as = "p",
  className,
  ...props
}: TypographyProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        typographyVariants({
          variant,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}