import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode } from "react";
import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";
import { buttonSizes } from "./button.constants";
import Spinner from "../spinner";

const buttonStyles = cva(
	[
		"inline-flex",
		"items-center",
		"justify-center",
		"gap-2",
		"font-medium",
		"tracking-normal",
		"rounded-md",
		"transition-all",
		"shrink-0",

		"cursor-pointer",

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

				link: "bg-transparent p-0 h-auto text-primary underline",
			},

			size: {
				sm: `
					${buttonSizes.sm.height}
					${buttonSizes.sm.padding}
					${buttonSizes.sm.text}
					[&_svg]:${buttonSizes.sm.icon}
				`,

				lg: `
					${buttonSizes.lg.height}
					${buttonSizes.lg.padding}
					${buttonSizes.lg.text}
					[&_svg]:${buttonSizes.lg.icon}
				`,
			},

			width: {
				auto: "w-auto",

				full: "w-full",
			},
		},

		defaultVariants: {
			variant: "primary",
			size: "lg",
			width: "auto",
		},
	},
);

export type ButtonProps = ComponentProps<"button"> &
	VariantProps<typeof buttonStyles> & {
		icon?: ReactNode;
		iconPosition?: "left" | "right";
		loading?: boolean;
	};

export default function Button({
	variant,
	size,
	width,
	loading = false,
	icon,
	iconPosition = "left",
	children,
	className,
	disabled,
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
			disabled={disabled || loading}
			aria-busy={loading}
			{...props}
		>
			{loading && (
				<Spinner
					size="sm"
					variant={variant === "primary" ? "inverse" : "default"}
				/>
			)}
			<>
				{icon && iconPosition === "left" && icon}

				{children}

				{icon && iconPosition === "right" && icon}
			</>
		</button>
	);
}
