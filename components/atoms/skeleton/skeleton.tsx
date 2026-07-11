import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import {
	SkeletonVariant,
	skeletonVariants,
	SkeletonSize,
	skeletonSizes,
} from "./skeleton.constants";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
	variant?: SkeletonVariant;
	size?: SkeletonSize;

	width?: string;
	height?: string;
}

const variantStyles: Record<SkeletonVariant, string> = {
	text: "h-4 w-full rounded-md",

	circle: "aspect-square rounded-full",

	rectangle: "rounded-lg",

	card: "rounded-xl h-48 w-full",
};

const sizeStyles: Record<SkeletonSize, string> = {
	sm: "max-w-[120px]",

	md: "max-w-[240px]",

	lg: "max-w-[400px]",
};

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
	(
		{
			className,
			variant = skeletonVariants.rectangle,
			size = skeletonSizes.md,
			width,
			height,
			style,
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				aria-hidden="true"
				className={cn(
					"animate-pulse bg-muted",
					variantStyles[variant],
					sizeStyles[size],
					className,
				)}
				style={{
					width,
					height,
					...style,
				}}
				{...props}
			/>
		);
	},
);

Skeleton.displayName = "Skeleton";

export default Skeleton;
