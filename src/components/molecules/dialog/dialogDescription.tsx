import { forwardRef } from "react";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import Typography from "@/foundations/typography";
import { cn } from "@/lib/utils";

export type DialogDescriptionProps = Omit<BaseDialog.Description.Props, "className"> & {
  className?: string;
};

const DialogDescription = forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <BaseDialog.Description
      ref={ref}
      // See dialogTitle.tsx for why no children value is passed here.
      render={
        <Typography
          as="p"
          variant="bodySm"
          className={cn("text-text-secondary", className)}
          {...({} as { children: React.ReactNode })}
        />
      }
      {...props}
    >
      {children}
    </BaseDialog.Description>
  ),
);

DialogDescription.displayName = "DialogDescription";

export default DialogDescription;
