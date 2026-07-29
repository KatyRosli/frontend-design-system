"use client";

import { forwardRef, useState, type ComponentProps } from "react";

import { Eye, EyeOff } from "lucide-react";
import Icon from "@/foundations/icon";

import Input from "@/components/atoms/input";

import { cn } from "@/lib/utils";

import {
  passwordFieldVariants,
  type PasswordFieldSize,
} from "./passwordField.constants";
import Button from "@/components/atoms/button";

export interface PasswordFieldProps extends Omit<
  ComponentProps<typeof Input>,
  "type"
> {
  toggleLabel?: string;

  iconSize?: PasswordFieldSize;
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (
    {
      className,

      toggleLabel = "Show password",

      iconSize = "lg",

      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
      setShowPassword((previous) => !previous);
    };

    return (
      <Input
        ref={ref}
        type={showPassword ? "text" : "password"}
        className={cn(className)}
        endAdornment={
          <Button
            type="button"
            variant="text"
            iconOnly
            icon={<Icon icon={showPassword ? Eye : EyeOff} size={iconSize} />}
            onClick={togglePassword}
            aria-label={showPassword ? "Hide password" : toggleLabel}
            aria-pressed={showPassword}
          />
        }
        {...props}
      />
    );
  },
);

PasswordField.displayName = "PasswordField";

export default PasswordField;
