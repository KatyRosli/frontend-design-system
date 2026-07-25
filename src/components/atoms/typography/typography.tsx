import type {
	ReactNode,
	ElementType,
} from "react";

import { cn } from "@/lib/utils";

import {
	typographyVariants,
	type TypographyVariant,
	type TypographyElement,
} from "./typography.constants";


export interface TypographyProps {
	children: ReactNode;

	variant?: TypographyVariant;

	as?: TypographyElement;

	className?: string;
}


export default function Typography({
	children,
	variant = "body",
	as = "p",
	className,
	...props
}: TypographyProps) {

	const Component = as as ElementType;


	return (
		<Component
			className={cn(
				typographyVariants({
					variant,
				}),
				className,
			)}
			{...props}
		>
			{children}
		</Component>
	);
}