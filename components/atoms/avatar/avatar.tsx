import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import {
	forwardRef,
	type ComponentPropsWithoutRef,
	type ReactNode,
} from "react";

import {
	avatarFallbackImage,
	avatarSizes,
	avatarStatusStyles,
	type AvatarSize,
	type AvatarStatus,
} from "./avatar.constants";

const avatarVariants = cva("block overflow-hidden rounded-full bg-muted", {
	variants: {
		size: {
			sm: avatarSizes.sm.avatar,
			md: avatarSizes.md.avatar,
			lg: avatarSizes.lg.avatar,
			xl: avatarSizes.xl.avatar,
		},
	},

	defaultVariants: {
		size: "md",
	},
});

type AvatarVariantProps = VariantProps<typeof avatarVariants>;

export type AvatarProps = ComponentPropsWithoutRef<"div"> &
	AvatarVariantProps & {
		status?: AvatarStatus;

		fallback?: ReactNode;

		src?: string;

		alt?: string;
	};

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
	(
		{
			size = "md",
			status,
			src,
			alt = "Avatar",
			fallback,
			className,
			children,
			...props
		},
		ref,
	) => {
		const currentSize = (size ?? "md") as AvatarSize;

		return (
			<div ref={ref} className="relative inline-block size-fit" {...props}>
				<div
					className={cn(
						"relative",
						avatarVariants({
							size,
						}),
						className,
					)}
				>
					{src ? (
						<Image
							src={src}
							alt={alt}
							fill
							sizes="100%"
							className="object-cover"
						/>
					) : (
						(fallback ?? (
							<Image
								src={avatarFallbackImage}
								alt="Avatar placeholder"
								fill
								sizes="100%"
								className="object-cover"
							/>
						))
					)}
				</div>

				{status && (
					<span
						aria-label={avatarStatusStyles[status].label}
						className={cn(
							"absolute bottom-0 right-0",
							"rounded-full",
							"border-2 border-background",
							avatarStatusStyles[status].className,
							avatarSizes[currentSize].indicator,
						)}
					/>
				)}
			</div>
		);
	},
);

Avatar.displayName = "Avatar";

export default Avatar;
