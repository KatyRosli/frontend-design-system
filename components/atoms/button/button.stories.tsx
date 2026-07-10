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
		size: "md",
		width: "auto",
		disabled: false,
		onClick: fn(),
	},

	argTypes: {
		variant: {
			control: "radio",
			options: buttonVariants,
			description: "Visual style of the button.",
		},

		size: {
			control: "radio",
			options: ["sm", "md", "lg", "icon-sm", "icon-md", "icon-lg"],
			description: "Button size.",
		},

    iconPosition:{
      control: {
        type: "radio",
      },
      options:[
        "left",
        "right",
      ],
      description: "Button supports one optional icon. Icon can appear on the left or right side.",
    },

		width: {
			control: "radio",
			options: buttonWidths,
			description: "Button width.",
		},

		disabled: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground = {} satisfies Story;

export const Primary = {} satisfies Story;

export const Secondary = {
	args: {
		variant: "secondary",
		children: "Edit profile",
	},
} satisfies Story;

export const Text = {
	args: {
		variant: "text",
		children: "Like",
	},
} satisfies Story;

export const Link = {
	args: {
		variant: "link",
		children: "Read more",
	},
} satisfies Story;

export const LeadingIcon = {
	args: {
		children: "Add item",
		icon: <Plus />,
    iconPosition: "left",
	},
} satisfies Story;

export const TrailingIcon = {
	args: {
		children: "Continue",
		icon: <ArrowRight />,
    iconPosition:"right",
	},
} satisfies Story;

export const BothIcons = {
	args: {
		children: <Bell />,
		size: "icon-md",
		variant: "secondary",
	},
} satisfies Story;

export const IconOnly = {
	args: {
		children: <Bell />,
		size: "icon-md",
		variant: "secondary",
		"aria-label": "Notifications",
	},
} satisfies Story;

export const Danger = {
	args: {
		children: "Delete",
		icon: <Trash />,
    iconPosition: "left",
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
