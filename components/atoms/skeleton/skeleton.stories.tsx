import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Skeleton from "./skeleton";
import { skeletonVariants, skeletonSizes } from "./skeleton.constants";

/**
 * Reusable Skeleton component that provides
 * loading placeholders with support for different
 * content shapes, custom dimensions, and responsive layouts.
 *
 * It improves perceived performance by displaying
 * consistent loading states while content is being
 * fetched or rendered.
 */

const meta = {
	title: "Design System/Atoms/Skeleton",

	component: Skeleton,

  tags: ["autodocs"],

	parameters: {
		layout: "centered",
	},

	argTypes: {
		variant: {
			control: "select",
			options: Object.values(skeletonVariants),
		},

		size: {
			control: "select",
			options: Object.values(skeletonSizes),
		},

		width: {
			control: "text",
		},

		height: {
			control: "text",
		},
	},

	args: {
		variant: "rectangle",
		size: "md",
	},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Text: Story = {
	args: {
		variant: "text",
		width: "240px",
	},
};

export const Circle: Story = {
	args: {
		variant: "circle",
		width: "48px",
		height: "48px",
	},
};

export const Rectangle: Story = {
	args: {
		variant: "rectangle",
		width: "320px",
		height: "160px",
	},
};

export const Card: Story = {
	args: {
		variant: "card",
	},
};

export const CustomSize: Story = {
	args: {
		variant: "rectangle",
		width: "500px",
		height: "200px",
	},
};
