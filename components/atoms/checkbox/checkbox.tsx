import { useEffect, useRef } from "react";
import { Check, Minus } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { type ComponentProps, type ReactNode } from "react";

import { cn } from "@/lib/utils";

import {
	checkboxConfig,
	checkboxVariants,
	type CheckboxVariant,
} from "./checkbox.constants";

const checkboxStyles = cva(
	[
		"peer",

		"appearance-none",

		"rounded-sm",

		"border",

		"transition-colors",

		"cursor-pointer",

		"focus-visible:outline",

		"focus-visible:outline-2",

		"focus-visible:outline-primary",

		"focus-visible:outline-offset-2",

		"checked:bg-primary",

		"checked:border-primary",

		"disabled:bg-muted",

		"disabled:border-muted-foreground/30",

		"disabled:cursor-not-allowed",
	],

	{
		variants: {
			variant: checkboxVariants,
		},

		defaultVariants: {
			variant: "default",
		},
	},
);

export interface CheckboxProps
	extends
		Omit<ComponentProps<"input">, "size">,
		VariantProps<typeof checkboxStyles> {
	label?: ReactNode;

	description?: ReactNode;

	required?: boolean;

	errorMessage?: ReactNode;

	indeterminate?: boolean;

	variant?: CheckboxVariant;
}

export default function Checkbox({
	label,

	description,

	required,

	errorMessage,

	indeterminate = false,

	variant,

	className,

	disabled,

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
			aria-disabled={disabled}
			className={cn(
				"flex",
				description
				? "items-start"
				: "items-center",

				"select-none",

				"cursor-pointer",

				checkboxConfig.gap,

				disabled && "cursor-not-allowed",
			)}
		>
			<div
				className={cn(
					"relative",

					"flex",

					"items-center",

					"justify-center",

					checkboxConfig.hitArea,
				)}
			>
				<input
					ref={inputRef}
					type="checkbox"
					className={cn(
						checkboxStyles({
							variant,
						}),

						checkboxConfig.box,

						className,
					)}
					disabled={disabled}
					{...props}
				/>

				<Check
					className={cn(
						"absolute",

						"hidden",

						"pointer-events-none",

						"text-primary-foreground",

						checkboxConfig.icon,

						"peer-checked:block",
					)}
				/>

				<Minus
					className={cn(
						"absolute",

						"hidden",

						"pointer-events-none",

						"text-primary-foreground",

						checkboxConfig.icon,

						"peer-indeterminate:block",
					)}
				/>
			</div>

			<div className="flex flex-col">
				{label && (
					<span
						className={cn(
							"font-medium",

							"text-foreground",

							checkboxConfig.text,
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

							checkboxConfig.description,
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
