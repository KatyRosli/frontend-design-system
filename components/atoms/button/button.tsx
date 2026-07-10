import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode } from "react";
import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { buttonSizes } from "./button.constants";

const buttonStyles = cva(
	[
		"inline-flex",
		"items-center",
		"justify-center",
		"gap-2",
		"font-medium", 
    "tracking-tight",
		"rounded-md",
		"transition-all",

		"focus-visible:outline",
		"focus-visible:outline-2",
		"focus-visible:outline-primary",
		"focus-visible:outline-offset-2",

		"disabled:pointer-events-none",
		"disabled:opacity-50",

		"not-disabled:hover:brightness-95",
		"not-disabled:active:scale-95",
	],

	{
		variants: {
			variant: {
				primary: "bg-primary text-primary-foreground shadow-md",

				secondary: "bg-secondary text-secondary-foreground shadow-md",

				text: "bg-transparent text-foreground hover:bg-muted",

				link: "bg-transparent p-0 hover:underline",
			},

			size: {
				sm: `${buttonSizes.sm.height}
          ${buttonSizes.sm.padding}
          ${buttonSizes.sm.text}
          [&_svg]:${buttonSizes.sm.icon}`,

				md: `${buttonSizes.md.height}
          ${buttonSizes.md.padding}
          ${buttonSizes.md.text}
          [&_svg]:${buttonSizes.md.icon}`,

				lg: `${buttonSizes.lg.height}
          ${buttonSizes.lg.padding}
          ${buttonSizes.lg.text}
          [&_svg]:${buttonSizes.lg.icon}`,

				"icon-sm": `${buttonSizes["icon-sm"].height}
          ${buttonSizes["icon-sm"].padding}
          [&_svg]:${buttonSizes["icon-sm"].icon}`,

				"icon-md": `${buttonSizes["icon-md"].height}
          ${buttonSizes["icon-md"].padding}
          [&_svg]:${buttonSizes["icon-md"].icon}`,

				"icon-lg": `${buttonSizes["icon-lg"].height}
          ${buttonSizes["icon-lg"].padding}
          [&_svg]:${buttonSizes["icon-lg"].icon}`,
			},

			width: {
				auto: "w-auto",

				full: "w-full",
			},
		},

		defaultVariants: {
			variant: "primary",
			size: "md",
			width: "auto",
		},
	},
);

export type ButtonProps = ComponentProps<"button"> &
	VariantProps<typeof buttonStyles> & {
		leftIcon?: ReactNode;

		rightIcon?: ReactNode;
	};

export default function Button({
	variant,

	size,

	width,

	leftIcon,

	rightIcon,

	children,

	className,

	...props
}: ButtonProps) {
	return (
		<button
			className={cn(
				buttonStyles({
					variant,
					size,
					width,
				}),

				className,
			)}
			{...props}
		>
			{leftIcon}

			{children}

			{rightIcon}
		</button>
	);
}
