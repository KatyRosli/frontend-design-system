import type {
	ReactNode,
	HTMLAttributes,
} from "react";


import { cn } from "@/lib/utils";


import {
	formFieldMessageVariants,
	formFieldVariants,
	type FormFieldSpacing,
} from "./formField.constants";



export interface FormFieldProps
	extends HTMLAttributes<HTMLDivElement> {

	label?: string;

	required?: boolean;

	description?: string;

	errorMessage?: string;

	children: ReactNode;

	spacing?: FormFieldSpacing;
}



const FormField = ({
	className,

	label,

	required = false,

	description,

	errorMessage,

	children,

	spacing = "md",

	...props

}: FormFieldProps) => {


	const hasError =
		Boolean(errorMessage);



	return (

		<div

			className={cn(
				formFieldVariants({
					spacing,
				}),

				className,
			)}

			{...props}

		>


			{label && (

				<label
					className="
						text-sm
						font-medium
						text-foreground
					"
				>

					{label}


					{required && (

						<span className="ml-1 text-destructive">
							*
						</span>

					)}

				</label>

			)}



			{children}



			{hasError ? (

				<p
					className={formFieldMessageVariants({
						state: "error",
					})}
				>
					{errorMessage}
				</p>

			) : description ? (

				<p
					className={formFieldMessageVariants({
						state: "default",
					})}
				>
					{description}
				</p>

			) : null}



		</div>

	);

};



export default FormField;
