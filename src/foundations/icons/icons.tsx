import type {
  LucideIcon,
} from "lucide-react";

import {
  cn,
} from "@/lib/utils";

import {
  iconSizes,
  type IconSize,
} from "./icons.constants";


export interface IconProps {
  icon: LucideIcon;

  size?: IconSize;

  className?: string;

  ariaHidden?: boolean;
}


export default function Icon({
  icon: IconComponent,

  size = "md",

  className,

  ariaHidden = true,

}: IconProps) {


  return (
    <IconComponent
      className={cn(
        iconSizes[size],
        "shrink-0",
        className,
      )}

      strokeWidth={2}

      aria-hidden={ariaHidden}
    />
  );
}
