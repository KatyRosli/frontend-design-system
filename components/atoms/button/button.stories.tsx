import Button from "./button";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ArrowRight, Bell, Plus, Trash } from "lucide-react";

import { fn } from "storybook/test";

const meta = {
	title: "Design System/Atoms/Button",

	component: Button,

	args: {
		children: "Button",

		variant: "primary",

		size: "md",

		width: "auto",

		onClick: fn(),
	},

	argTypes: {
		variant: {
			control: {
				type: "radio",
			},

			options: ["primary", "secondary", "text", "link"],
		},

		size: {
			control: {
				type: "radio",
			},

			options: ["sm", "md", "lg", "icon-sm", "icon-md", "icon-lg"],
		},

		width: {
			control: {
				type: "radio",
			},

			options: ["auto", "full"],
		},
	},

	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary = {} satisfies Story;

export const Secondary = {
	args: {
		variant: "secondary",
		children: "Edit profile",
	},
} satisfies Story;

export const LeadingIcon = {
	args: {
		children: "Add item",
		leftIcon: <Plus />,
	},
} satisfies Story;

export const TrailingIcon = {
	args: {
		children: "Continue",
		rightIcon: <ArrowRight />,
	},
} satisfies Story;

export const IconOnly = {
	args: {
		children: <Bell />,
		size: "icon-md",
		variant: "secondary",
	},
} satisfies Story;

export const Danger = {
	args: {
		children: "Delete",
		variant: "primary",
		leftIcon: <Trash />,
	},
} satisfies Story;

export const FullWidth = {
	args: {
		children: "Continue",
		width: "full",
	},
} satisfies Story;

export const Disabled = {
	args: {
		disabled: true,
	},
} satisfies Story;
