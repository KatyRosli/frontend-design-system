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
import Typography from "@/foundations/typography";



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
				<Typography as="label" variant="bodySm" className="text-text-primary">
							{label}
						  
					{required && (

						<Typography as="span" variant="bodySm" className="text-danger">
							*
						</Typography>

					)}

				</Typography>

			)}
			{children}
			{hasError ? (

				<Typography
  as="p"
  variant="bodySm"
  className={formFieldMessageVariants({
    state: "error",
  })}
>
					{errorMessage}
				</Typography>

			) : description ? (

				<Typography
  as="p"
  variant="bodySm"
  className={formFieldMessageVariants({
    state: "default",
  })}
>
					{description}
				</Typography>

			) : null}



		</div>

	);

};



export default FormField;
