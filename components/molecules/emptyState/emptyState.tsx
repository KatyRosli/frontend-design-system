import type { ReactNode, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import {
	emptyStateIconVariants,
	emptyStateVariants,
	type EmptyStateSize,
} from "./emptyState.constants";

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
				"
			>
				<h3
					className="
						text-lg
						font-semibold
						text-foreground
					"
				>
					{title}
				</h3>

				{description && (
					<p
						className="
							max-w-sm
							text-sm
							text-muted-foreground
						"
					>
						{description}
					</p>
				)}
			</div>

			{action && <div className="mt-2">{action}</div>}
		</div>
	);
};

export default EmptyState;
