import { forwardRef } from "react";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

import Icon from "@/foundations/icon";
import { cn } from "@/lib/utils";

export type DialogCloseProps = Omit<BaseDialog.Close.Props, "className"> & {
  className?: string;
};

/**
 * A button that closes the dialog. With no `render` prop, renders a
 * default X icon button (pass `children` to swap the icon for something
 * else). With `render`, e.g. `render={<Button variant="secondary" />}`,
 * the default icon-button styling is skipped entirely so it doesn't
 * conflict with the rendered element's own classes - only `className` is
 * still merged in.
 */
const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ className, children, render, ...props }, ref) => {
    if (render) {
      return (
        <BaseDialog.Close ref={ref} render={render} className={className} {...props}>
          {children}
        </BaseDialog.Close>
      );
    }

    return (
      <BaseDialog.Close
        ref={ref}
        aria-label={children ? undefined : "Close"}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors",
          "hover:bg-surface hover:text-foreground",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
          className,
        )}
        {...props}
      >
        {children ?? <Icon icon={X} size="sm" />}
      </BaseDialog.Close>
    );
  },
);

DialogClose.displayName = "DialogClose";

export default DialogClose;
