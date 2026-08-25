import {
  forwardRef,
  type HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import {
  cardVariants,
  type CardVariant,
} from "./card.constants";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const variantStyles: Record<CardVariant, string> = {
  default: "bg-card",
  outlined: "bg-card border border-border",
  elevated: "bg-card border border-border shadow-md",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = cardVariants.default,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl",
          variantStyles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Card.displayName = "Card";

export default Card;
