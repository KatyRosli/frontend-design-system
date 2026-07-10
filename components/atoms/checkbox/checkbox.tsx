import { Check } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";

import { type ComponentProps, type ReactNode, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import {
	checkboxSizes,
	checkboxVariants,
	type CheckboxSize,
} from "./checkbox.constants";

const checkboxStyles = cva(
	[
		"peer",
		"appearance-none",
		"rounded-sm",
		"border",
		"transition",

		"cursor-pointer",

		"focus-visible:outline",
		"focus-visible:outline-2",
		"focus-visible:outline-primary",
		"focus-visible:outline-offset-2",

		"disabled:cursor-not-allowed",
		"disabled:opacity-50",

		"checked:bg-primary",
		"checked:border-primary",

		"indeterminate:bg-primary",
	],

	{
		variants: {
			variant: checkboxVariants,

			size: {
				sm: checkboxSizes.sm.box,
				md: checkboxSizes.md.box,
				lg: checkboxSizes.lg.box,
			},
		},

		defaultVariants: {
			variant: "default",
			size: "md",
		},
	},
);

export type CheckboxProps = Omit<ComponentProps<"input">, "size"> &
	VariantProps<typeof checkboxStyles> & {
		size?: CheckboxSize;

		label?: ReactNode;

		description?: ReactNode;

		required?: boolean;

		errorMessage?: ReactNode;

		indeterminate?: boolean;
	};

export default function Checkbox({
	label,

	description,

	variant,

	size = "md",

	className,

	disabled,

	required,

	errorMessage,

	indeterminate = false,

	...props
}: CheckboxProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.indeterminate = indeterminate;
		}
	}, [indeterminate]);

	return (
		<label
			className={cn(
				"flex",

				"items-start",

				"select-none",

				checkboxSizes[size].gap,

				disabled && "cursor-not-allowed",
			)}
		>
			<div className="relative flex items-center justify-center">
				<input
					ref={inputRef}
					type="checkbox"
					className={cn(
						checkboxStyles({
							variant,

							size,
						}),

						className,
					)}
					disabled={disabled}
					{...props}
				/>

				<Check
					className={cn(
						"pointer-events-none",

						"absolute",

						"hidden",

						"text-primary-foreground",

						checkboxSizes[size].icon,

						"peer-checked:block",
					)}
				/>
			</div>

			<div className="flex flex-col">
				{label && (
					<span
						className={cn(
							"font-medium",
              "text-foreground",
							checkboxSizes[size].text,
						)}
					>
						{label}

						{required && <span className="ml-1 text-destructive">*</span>}
					</span>
				)}

				{description && (
					<span
						className={cn(
							"text-muted-foreground",

							checkboxSizes[size].description,
						)}
					>
						{description}
					</span>
				)}

				{errorMessage && (
					<span className="text-sm text-destructive">{errorMessage}</span>
				)}
			</div>
		</label>
	);
}
