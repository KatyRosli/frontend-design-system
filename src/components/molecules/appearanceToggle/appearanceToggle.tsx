"use client";

import type { ButtonHTMLAttributes } from "react";

import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

import Icon from "@/foundations/icon";

import {
  appearanceToggleVariants,
  type AppearanceMode,
  type AppearanceToggleSize,
} from "./appearanceToggle.constants";

export interface AppearanceToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  appearance: AppearanceMode;

  onAppearanceChange: (
    appearance: AppearanceMode,
  ) => void;

  size?: AppearanceToggleSize;
}

const AppearanceToggle = ({
  appearance,

  onAppearanceChange,

  size = "md",

  className,

  ...props
}: AppearanceToggleProps) => {
  const isDark = appearance === "dark";

  const handleToggle = () => {
    onAppearanceChange(
      isDark ? "light" : "dark",
    );
  };

  return (
    <button
      type="button"
      className={cn(
        appearanceToggleVariants({
          size,
        }),

        className,
      )}
      onClick={handleToggle}
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      aria-pressed={isDark}
      {...props}
    >
      <Icon
        icon={isDark ? Sun : Moon}
        size={size === "sm" ? "sm" : "md"}
        aria-hidden
      />
    </button>
  );
};

export default AppearanceToggle;
