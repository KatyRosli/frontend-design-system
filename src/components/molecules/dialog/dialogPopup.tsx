import { forwardRef } from "react";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import { cn } from "@/lib/utils";

import {
  dialogPopupVariantStyles,
  type DialogPopupSize,
  type DialogPopupVariant,
} from "./dialog.constants";

export type DialogPopupProps = Omit<BaseDialog.Popup.Props, "className"> & {
  className?: string;
  variant?: DialogPopupVariant;
  size?: DialogPopupSize;
};

/**
 * The dialog panel itself.
 * - `variant="center"` (default): a centered card, sized via `size`.
 * - `variant="right"` / `"left"`: a panel anchored to that edge on `sm`
 *   screens and up, width controlled by `size`; below `sm` it takes the
 *   full screen.
 * - `variant="bottom"`: a sheet anchored to the bottom edge on `sm` screens
 *   and up, height controlled by `size`; below `sm` it takes the full
 *   screen.
 */
const DialogPopup = forwardRef<HTMLDivElement, DialogPopupProps>(
  ({ className, variant = "center", size = "md", ...props }, ref) => (
    <BaseDialog.Popup
      ref={ref}
      className={cn(dialogPopupVariantStyles({ variant, size }), className)}
      {...props}
    />
  ),
);

DialogPopup.displayName = "DialogPopup";

export default DialogPopup;
