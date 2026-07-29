import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import {
  spinnerVariantsStyles,
  type SpinnerSize,
  type SpinnerVariant,
} from "./spinner.constants";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;

  variant?: SpinnerVariant;

  ariaLabel?: string;
}

const Spinner = ({
  className,
  size = "md",
  variant = "default",
  ariaLabel = "Loading",
  ...props
}: SpinnerProps) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        spinnerVariantsStyles({
          size,
          variant,
        }),

        className,
      )}
      {...props}
    >
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
};

export default Spinner;
