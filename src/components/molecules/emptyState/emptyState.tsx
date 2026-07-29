import type { ReactNode, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import {
	emptyStateIconVariants,
	emptyStateVariants,
	type EmptyStateSize,
} from "./emptyState.constants";
import Typography from "@/foundations/typography";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
	icon?: ReactNode;

	title: string;

	description?: string;

	action?: ReactNode;

	size?: EmptyStateSize;
}

const EmptyState = ({
	className,

	icon,

	title,

	description,

	action,

	size = "md",

	...props
}: EmptyStateProps) => {
	return (
		<div
			className={cn(
				emptyStateVariants({
					size,
				}),

				className,
			)}
			{...props}
		>
			{icon && (
				<div
					className={emptyStateIconVariants({
						size,
					})}
				>
					{icon}
				</div>
			)}

			<div
				className="
					flex
					flex-col
					gap-1
          items-center
				"
			>
				<Typography as="h3" variant="h3">
					{title}
				</Typography>

				{description && (
					<Typography as="p" variant="bodySm"
					className="text-text-disabled">
						{description}
					</Typography>
				)}
			</div>

			{action && <div className="mt-2">{action}</div>}
		</div>
	);
};

export default EmptyState;
