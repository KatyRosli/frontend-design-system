import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowRight, Bell, Plus, Trash } from "lucide-react";

import { fn } from "storybook/test";

import Button from "./button";

import { buttonVariants, buttonWidths } from "./button.constants";

/**
 * Reusable Button component that supports
 * different variants, sizes, widths, and icon positions.
 * It can render leading or trailing icons,
 * handle disabled states, and adapt across responsive layouts.
 */

const meta = {
	title: "Design System/Atoms/Button",

	component: Button,

	tags: ["autodocs"],

	args: {
		children: "Button",
		variant: "primary",
		size: "lg",
		width: "auto",
		disabled: false,
		loading: false,
		onClick: fn(),
	},

	argTypes: {
		variant: {
			control: "radio",

			options: buttonVariants,

			description: "Button visual style.",
		},

		size: {
			control: "radio",

			options: ["sm", "lg"],

			description: "Responsive button size.",
		},

		width: {
			control: "radio",

			options: buttonWidths,

			description: "Button width.",
		},

		iconPosition: {
			control: "radio",

			options: ["left", "right"],

			description: "Icon placement.",
		},

		disabled: {
			control: "boolean",
			description: "Shows disable interactions."
		},
		loading: {
			control: "boolean",
			description: "Shows loading spinner and disables interactions."
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Primary: Story = {};

export const Secondary: Story = {
	args: {
		variant: "secondary",

		children: "Edit profile",
	},
};

export const Text: Story = {
	args: {
		variant: "text",

		children: "Like",
	},
};

export const Link: Story = {
	args: {
		variant: "link",

		children: "Read more",
	},
};

export const Small: Story = {
	args: {
		size: "sm",

		children: "Small button",
	},
};

export const Large: Story = {
	args: {
		size: "lg",

		children: "Large button",
	},
};

export const LeadingIcon: Story = {
	args: {
		children: "Add item",

		icon: <Plus />,

		iconPosition: "left",
	},
};

export const TrailingIcon: Story = {
	args: {
		children: "Continue",

		icon: <ArrowRight />,

		iconPosition: "right",
	},
};

export const IconOnly: Story = {
	args: {
		children: <Bell />,

		size: "lg",

		variant: "secondary",

		"aria-label": "Notifications",
	},
};

export const Danger: Story = {
	args: {
		children: "Delete",

		icon: <Trash />,
	},
};

export const FullWidth: Story = {
	args: {
		children: "Continue",

		width: "full",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};
