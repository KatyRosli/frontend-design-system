import { forwardRef } from "react";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import Typography from "@/foundations/typography";
import { cn } from "@/lib/utils";

export type DialogTitleProps = Omit<BaseDialog.Title.Props, "className"> & {
  className?: string;
};

const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, children, ...props }, ref) => (
    <BaseDialog.Title
      ref={ref}
      // Typography's `children` prop is required, but Base UI's render-prop
      // cloning only injects the real children when the render element
      // doesn't already declare its own - so no children value is passed
      // here on purpose. The cast below satisfies TypeScript without
      // setting an actual children prop at runtime.
      render={
        <Typography
          as="h2"
          variant="h4"
          className={cn(className)}
          {...({} as { children: React.ReactNode })}
        />
      }
      {...props}
    >
      {children}
    </BaseDialog.Title>
  ),
);

DialogTitle.displayName = "DialogTitle";

export default DialogTitle;
