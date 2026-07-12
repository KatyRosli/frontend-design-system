import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import {
	inputVariants,
	type InputSize,
	type InputState,
} from "./input.constants";

export interface InputProps extends Omit<ComponentProps<"input">, "size"> {
	size?: InputSize;

	state?: InputState;
}

const Input = ({
	className,

	size = "lg",

	state = "default",

	type = "text",

	...props
}: InputProps) => {
	return (
		<input
			type={type}
			className={cn(
				inputVariants({
					size,
					state,
				}),

				className,
			)}
			{...props}
		/>
	);
};

export default Input;
