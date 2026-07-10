import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { ClassNames } from "storybook/theming";

const buttonVariants = cva(
  cn(
    "font-semibold",
    "flex items-center, justify-center gap-2",
    "px-4",
    "cursor-pointer", 
    "focus-visible:outline focus-visible:outline-primary focus-visible: outline-offset-2",
    "disabled:cursor-not-allowed disabled:shadow-none"
  ), 
  {
    variants: { 
      variant: { 
        primary: cn(
          "bg-primary text-primary-foreground shadow-lg",
          "not-disabled:hover:brightness-95",
          "not-disabled:active:scale-95 active:shadow-none",
          "disabled:bg-primary-disabled disabled:text-primary-disabled-foreground"
        ),
        secondary: cn(
          "bg-secondary text-secondary-foreground shadow-lg",
          "not-disabled:hover:brightness-95",
          "not-disabled:active:scale-95 active:shadow-none",
          "disabled:bg-secondary-disabled disabled:text-secondary-disabled-foreground"
        ),
        text: cn(
          "bg-transparent text-secondary-foreground"
        ),
        link: "hover:underline p-0"
      }, 
    size: {
      sm: "h-8",
      md: "h-9 px-4 rounded-md [%_svg:not([class*='size-'])]:size-4"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>
type ButtonComponentProps = ComponentProps<"button">;

type ButtonProps = ButtonComponentProps & ButtonVariantProps;

export default function Button ({ 
  variant, 
  size, 
  className,
   ...rest 
  }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({variant, size, className}))} { ...rest }
    {...rest}
    />
  );
  }