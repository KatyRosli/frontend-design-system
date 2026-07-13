import { forwardRef, type ComponentProps, type ReactNode } from "react";

import { cn } from "@/lib/utils";

import {
	inputVariants,
	type InputSize,
	type InputState,
} from "./input.constants";

export interface InputProps extends Omit<ComponentProps<"input">, "size"> {
	size?: InputSize;

	state?: InputState;

	startAdornment?: ReactNode;

	endAdornment?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,

			size = "lg",

			state = "default",

			type = "text",

			startAdornment,

			endAdornment,

			...props
		},

		ref,
	) => {
		const inputClasses = cn(
			inputVariants({
				size,
				state,
			}),

			startAdornment && "pl-10",

			endAdornment && "pr-10",

			className,
		);

		if (!startAdornment && !endAdornment) {
			return (
				<input ref={ref} type={type} className={inputClasses} {...props} />
			);
		}

		return (
			<div className="relative flex w-full items-center">
				{startAdornment && (
					<div
						className="
						pointer-events-none
						absolute
						left-3
						flex
						items-center
						text-muted-foreground
					"
					>
						{startAdornment}
					</div>
				)}

				<input ref={ref} type={type} className={inputClasses} {...props} />

				{endAdornment && (
					<div
						className="
						absolute
						right-3
						flex
						items-center
					"
					>
						{endAdornment}
					</div>
				)}
			</div>
		);
	},
);

Input.displayName = "Input";

export default Input;
