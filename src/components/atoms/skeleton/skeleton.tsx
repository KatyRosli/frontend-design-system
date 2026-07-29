import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import {
	skeletonVariants,
	type SkeletonVariant,
} from "./skeleton.constants";


export interface SkeletonProps
	extends HTMLAttributes<HTMLDivElement> {
	variant?: SkeletonVariant;
}


const variantStyles: Record<SkeletonVariant, string> = {
	text: "rounded-md",

	circle: "rounded-full aspect-square",

	rectangle: "rounded-lg",
};


const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
	(
		{
			className,
			variant = skeletonVariants.rectangle,
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				aria-hidden="true"
				className={cn(
					"animate-pulse bg-skeleton",
					variantStyles[variant],
					className,
				)}
				{...props}
			/>
		);
	},
);


Skeleton.displayName = "Skeleton";

export default Skeleton;
