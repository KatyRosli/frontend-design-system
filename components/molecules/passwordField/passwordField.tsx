"use client";

import { forwardRef, useState, type ComponentProps } from "react";

import { Eye, EyeOff } from "lucide-react";

import Input from "@/components/atoms/input";

import { cn } from "@/lib/utils";

import {
	passwordFieldVariants,
	type PasswordFieldSize,
} from "./passwordField.constants";

export interface PasswordFieldProps extends Omit<
	ComponentProps<typeof Input>,
	"type"
> {
	toggleLabel?: string;

	iconSize?: PasswordFieldSize;
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
	(
		{
			className,

			toggleLabel = "Show password",

			iconSize = "lg",

			...props
		},
		ref,
	) => {
		const [showPassword, setShowPassword] = useState(false);

		const togglePassword = () => {
			setShowPassword((previous) => !previous);
		};

		return (
			<Input
				ref={ref}
				type={showPassword ? "text" : "password"}
				className={cn(className)}
				endAdornment={
					<button
						type="button"
						onClick={togglePassword}
						className={passwordFieldVariants({
							size: iconSize,
						})}
						aria-label={showPassword ? "Hide password" : toggleLabel}
						aria-pressed={showPassword}
					>
						{showPassword ? <Eye /> : <EyeOff />}
					</button>
				}
				{...props}
			/>
		);
	},
);

PasswordField.displayName = "PasswordField";

export default PasswordField;
