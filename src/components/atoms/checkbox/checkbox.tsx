import { useEffect, useRef } from "react";
import Icon from "@/foundations/icon";

import { Check, Minus } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { type ComponentProps, type ReactNode } from "react";

import { cn } from "@/lib/utils";

import Typography from "@/foundations/typography";

import {
  checkboxConfig,
  checkboxVariants,
  type CheckboxVariant,
} from "./checkbox.constants";

const checkboxStyles = cva(
  [
    "peer",

    "appearance-none",

    "rounded-sm",

    "border",

    "transition-colors",

    "cursor-pointer",

    "focus-visible:outline",

    "focus-visible:outline-2",

    "focus-visible:outline-primary",

    "focus-visible:outline-offset-2",

    "checked:bg-primary",

    "checked:border-primary",

    "disabled:bg-surface-subtle",

    "disabled:border-border",

    "disabled:text-text-disabled",
  ],

  {
    variants: {
      variant: checkboxVariants,
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

export interface CheckboxProps
  extends
    Omit<ComponentProps<"input">, "size">,
    VariantProps<typeof checkboxStyles> {
  label?: ReactNode;

  description?: ReactNode;

  required?: boolean;

  errorMessage?: ReactNode;

  indeterminate?: boolean;

  variant?: CheckboxVariant;
}

export default function Checkbox({
  label,

  description,

  required,

  errorMessage,

  indeterminate = false,

  variant,

  className,

  disabled,

  ...props
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      aria-disabled={disabled}
      className={cn(
        "flex",
        description ? "items-start" : "items-center",

        "select-none",

        "cursor-pointer",

        checkboxConfig.gap,

        disabled && "cursor-not-allowed",
      )}
    >
      <div
        className={cn(
          "relative",

          "flex",

          "items-center",

          "justify-center",

          checkboxConfig.hitArea,
        )}
      >
        <input
          ref={inputRef}
          type="checkbox"
          className={cn(
            checkboxStyles({
              variant,
            }),

            checkboxConfig.box,

            className,
          )}
          disabled={disabled}
          {...props}
        />

        <Icon
          icon={Check}
          size="sm"
          className={cn(
            "absolute",

            "hidden",

            "pointer-events-none",
            "text-text-primary",

            checkboxConfig.icon,

            "peer-checked:block",
          )}
        />

        <Icon
          icon={Minus}
          size="sm"
          className={cn(
            "absolute",

            "hidden",

            "pointer-events-none",
            "text-text-primary",

            checkboxConfig.icon,

            "peer-indeterminate:block",
          )}
        />
      </div>

      <div className="flex flex-col gap-spacing-xs">
        {label && (
          <Typography as="span" variant="labelMd" className="text-text-primary">
            {label}

            {required && (
              <Typography
                as="span"
                variant="labelMd"
                className="text-danger spacing-xs"
              >
                *
              </Typography>
            )}
          </Typography>
        )}

        {description && (
          <Typography as="p" variant="bodySm" className="text-text-secondary">
            {description}
          </Typography>
        )}

        {errorMessage && (
          <Typography as="p" variant="bodySm" className="text-danger">
            {errorMessage}
          </Typography>
        )}
      </div>
    </label>
  );
}
