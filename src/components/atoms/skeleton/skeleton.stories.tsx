import Skeleton from "@/components/atoms/skeleton";
import { skeletonVariants } from "@/components/atoms/skeleton";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * Reusable Skeleton component
 * used as a loading placeholder.
 *
 * Supports different shapes:
 * - text
 * - circle
 * - rectangle
 *
 * Dimensions should be controlled
 * through className to match the
 * component being replaced.
 */

const meta = {
	title: "Components/Atoms/Skeleton",

	component: Skeleton,

	args: {
		variant: "rectangle",
		className: "h-20 w-40",
	},

	argTypes: {
		variant: {
			description: "Controls skeleton shape",

			control: {
				type: "radio",
			},

			options: Object.keys(skeletonVariants),
		},

		className: {
			description:
				"Controls skeleton dimensions",
		},
	},

	tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;


export default meta;


type Story = StoryObj<typeof Skeleton>;


export const Rectangle: Story = {
	args: {
		variant: "rectangle",
		className: "h-40 w-full",
	},
};


export const Text: Story = {
	args: {
		variant: "text",
		className: "h-4 w-60",
	},
};


export const Circle: Story = {
	args: {
		variant: "circle",
		className: "size-10",
	},
};


export const Profile: Story = {
	render: () => (
		<div className="flex items-center gap-4">

			<Skeleton
				variant="circle"
				className="size-12"
			/>

			<div className="flex flex-col gap-2">
				<Skeleton
					variant="text"
					className="h-4 w-40"
				/>

				<Skeleton
					variant="text"
					className="h-3 w-24"
				/>
			</div>

		</div>
	),
};


export const Card: Story = {
	render: () => (
		<div className="flex flex-col gap-4">

			<Skeleton
				variant="rectangle"
				className="h-48 w-full"
			/>

			<Skeleton
				variant="text"
				className="h-4 w-3/4"
			/>

			<Skeleton
				variant="text"
				className="h-4 w-1/2"
			/>

		</div>
	),
};
