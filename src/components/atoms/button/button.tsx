import { cva, type VariantProps } from "class-variance-authority";

import type { ComponentProps, ReactNode } from "react";

import Typography from "@/foundations/typography";

import { cn } from "@/lib/utils";

import { buttonSizes } from "./button.constants";

import Spinner from "../spinner";

const buttonStyles = cva(
  [
    "cursor-pointer",
    "transition-colors",
    "duration-200",
    "ease-out",
    "inline-flex",

    "items-center",

    "justify-center",

    "gap-2",

    "rounded-md",

    "transition-all",

    "focus-visible:outline",

    "focus-visible:outline-2",

    "focus-visible:outline-primary",

    "focus-visible:outline-offset-2",

    "disabled:pointer-events-none",

    "disabled:opacity-50",

    "active:scale-95",
  ],

  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover",

        success: "bg-success text-success-foreground hover:bg-success-hover",

        danger: "bg-danger text-danger-foreground hover:bg-danger-hover",

        text: "text-text-primary hover:bg-surface-subtle",

        link: "text-primary underline underline-offset-4",
      },

      size: {
        sm: `

					${buttonSizes.sm.height}

					${buttonSizes.sm.padding}

					[&_svg]:${buttonSizes.sm.icon}

				`,

        lg: `

					${buttonSizes.lg.height}

					${buttonSizes.lg.padding}

					[&_svg]:${buttonSizes.lg.icon}

				`,
      },

      width: {
        auto: "w-auto",

        full: "w-full",
      },
    },

    defaultVariants: {
      variant: "primary",

      size: "lg",

      width: "auto",
    },
  },
);

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    icon?: ReactNode;

    iconPosition?: "left" | "right";

    loading?: boolean;
  };

export default function Button({
  variant,

  size = "lg",

  width,

  icon,

  iconPosition = "left",

  loading = false,

  children,

  className,

  disabled,

  ...props
}: ButtonProps) {
  const labelVariant = size === "lg" ? "labelLg" : "labelMd";

  return (
    <button
      className={cn(
        buttonStyles({
          variant,

          size,

          width,
        }),

        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <Spinner
          size="sm"
          variant={variant === "primary" ? "inverse" : "default"}
        />
      )}

      {icon && iconPosition === "left" && icon}

      <Typography as="span" variant={labelVariant} className="text-inherit">
        {children}
      </Typography>

      {icon && iconPosition === "right" && icon}
    </button>
  );
}
