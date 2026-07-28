import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Spinner from "./spinner";

import { spinnerSizes, spinnerVariants } from "./spinner.constants";

/**
 * Reusable Spinner component that supports
 * different sizes and visual variants.
 * It provides a lightweight loading indicator
 * for asynchronous states, buttons, and page loading.
 */

const meta = {
	title: "Components/Atoms/Spinner",

	component: Spinner,

	tags: ["autodocs"],

	args: {
		size: "md",

		variant: "default",

		ariaLabel: "Loading",
	},

	argTypes: {
		size: {
			control: "radio",

			options: spinnerSizes,

			description: "Spinner size.",
		},

		variant: {
			control: "radio",

			options: spinnerVariants,

			description: "Spinner visual style.",
		},

		ariaLabel: {
			control: "text",

			description: "Accessible loading label.",
		},
	},
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Playground: Story = {};

export const Small: Story = {
	args: {
		size: "sm",
	},
};

export const Medium: Story = {
	args: {
		size: "md",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
	},
};

export const Muted: Story = {
	args: {
		variant: "muted",
	},
};

export const Inverse: Story = {
	args: {
		variant: "inverse",
	},
};
