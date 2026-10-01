import { forwardRef } from "react";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import { cn } from "@/lib/utils";

import { dialogBackdropVariants } from "./dialog.constants";

export type DialogBackdropProps = Omit<BaseDialog.Backdrop.Props, "className"> & {
  className?: string;
};

const DialogBackdrop = forwardRef<HTMLDivElement, DialogBackdropProps>(
  ({ className, ...props }, ref) => (
    <BaseDialog.Backdrop
      ref={ref}
      className={cn(dialogBackdropVariants(), className)}
      {...props}
    />
  ),
);

DialogBackdrop.displayName = "DialogBackdrop";

export default DialogBackdrop;
