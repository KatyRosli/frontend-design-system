import { forwardRef, type ComponentProps, type ReactNode } from "react";

import { cn } from "@/lib/utils";

import Typography from "@/foundations/typography";

import {
  inputVariants,
  type InputSize,
  type InputState,
} from "./input.constants";

export interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  label?: string;

  helperText?: string;

  errorMessage?: string;

  size?: InputSize;

  state?: InputState;

  startAdornment?: ReactNode;

  endAdornment?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,

      label,

      helperText,

      errorMessage,

      size = "lg",

      state = "default",

      type = "text",

      startAdornment,

      endAdornment,

      ...props
    },
    ref,
  ) => {
    const hasError = state === "error";

    const inputClasses = cn(
      inputVariants({
        size,
        state,
      }),

      startAdornment && "pl-10",

      endAdornment && "pr-10",

      className,
    );

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <Typography as="label" variant="labelMd" className="text-text-primary">
            {label}
          </Typography>
        )}

        <div className="relative flex w-full items-center">
          {startAdornment && (
            <div
              className=" absolute left-3 flex items-center text-text-secondary"
            >
              {startAdornment}
            </div>
          )}

          <input ref={ref} type={type} className={inputClasses} {...props} />

          {endAdornment && (
            <div
              className=" absolute right-3 flex items-center text-text-secondary"
            >
              {endAdornment}
            </div>
          )}
        </div>

        {hasError && errorMessage ? (
          <Typography as="p" variant="bodySm" className="text-danger">
            {errorMessage}
          </Typography>
        ) : helperText ? (
          <Typography as="p" variant="bodySm" className="text-text-secondary">
            {helperText}
          </Typography>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
