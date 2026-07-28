import {
	forwardRef,
	type ComponentPropsWithoutRef,
	type ReactNode,
} from "react";

import {
	cva,
	type VariantProps,
} from "class-variance-authority";

import {
	UserRound,
} from "lucide-react";


import Typography from "@/foundations/typography";

import {
	cn,
} from "@/lib/utils";


import {
	avatarSizes,
	avatarStatusStyles,
	type AvatarStatus,
} from "./avatar.constants";



const avatarVariants = cva(
	[
		"relative",
		"flex",
		"items-center",
		"justify-center",
		"overflow-hidden",
		"rounded-full",
		"bg-surface-subtle",
		"text-text-secondary",
	],

	{
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
	},
);



const avatarIndicatorVariants = cva(
	[
		"absolute",
		"bottom-0",
		"right-0",
		"rounded-full",
		"border-2",
		"border-background",
	],

	{
		variants: {

			status: {

				online:
					"bg-success",

				away:
					"bg-warning",

				busy:
					"bg-danger",

				offline:
					"bg-text-disabled",

			},

		},
	},
);



type AvatarVariantProps =
	VariantProps<typeof avatarVariants>;



export interface AvatarProps
	extends ComponentPropsWithoutRef<"div">,
		AvatarVariantProps {


	src?: string;

	alt?: string;

	name?: string;

	fallback?: ReactNode;

	status?: AvatarStatus;

}



function getInitials(
	name?: string,
) {

	if (!name) return null;


	return name
		.split(" ")
		.map(
			(word) => word[0],
		)
		.join("")
		.slice(0,2)
		.toUpperCase();

}




const Avatar = forwardRef<
	HTMLDivElement,
	AvatarProps
>(

	(
		{
			size="md",

			src,

			alt="Avatar",

			name,

			fallback,

			status,

			className,

			...props

		},

		ref,

	) => {


		const initials =
			getInitials(name);



		return (

			<div
				ref={ref}
				className="relative inline-flex"
				{...props}
			>


				<div
					className={cn(
						avatarVariants({
							size,
						}),

						className,
					)}
				>


					{
						src ? (

							<img
								src={src}
								alt={alt}
								className="
									size-full
									object-cover
								"
							/>

						)

						:

						initials ? (

							<Typography
								as="span"
								variant="labelMd"
							>
								{initials}
							</Typography>

						)

						:

						fallback ? (

							fallback

						)

						:

						(

							<UserRound
								aria-hidden="true"
								className="size-1/2"
							/>

						)

					}


				</div>



				{
					status && (

						<span
							aria-label={
								avatarStatusStyles[status].label
							}

							className={cn(
								avatarIndicatorVariants({
									status,
								}),

								avatarSizes[
									size ?? "md"
								].indicator,
							)}
						/>

					)
				}


			</div>

		);

	},

);



Avatar.displayName =
	"Avatar";


export default Avatar;