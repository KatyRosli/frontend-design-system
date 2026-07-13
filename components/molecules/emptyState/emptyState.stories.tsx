import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FolderOpen, Search, Bell } from "lucide-react";

import Button from "@/components/atoms/button";

import EmptyState from "./emptyState";

import { emptyStateSizes } from "./emptyState.constants";

/**
 * Reusable EmptyState molecule that displays
 * empty content situations with optional icons,
 * descriptions, and actions.
 *
 * It is commonly used for empty lists,
 * dashboards, search results, and notifications.
 */

const meta = {
	title: "Design System/Molecules/EmptyState",

	component: EmptyState,

	tags: ["autodocs"],

	args: {
		title: "No items found",

		description: "There are currently no items available.",

		size: "md",
	},

	argTypes: {
		size: {
			control: "radio",

			options: emptyStateSizes,

			description: "Empty state spacing size.",
		},
	},
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Playground: Story = {};

export const Default: Story = {
	args: {
		icon: <FolderOpen />,

		title: "No projects yet",

		description: "Create your first project to get started.",

		action: <Button>Create project</Button>,
	},
};

export const NoSearchResults: Story = {
	args: {
		icon: <Search />,

		title: "No results found",

		description: "Try changing your search keywords.",
	},
};

export const NoNotifications: Story = {
	args: {
		icon: <Bell />,

		title: "No notifications",

		description: "You are all caught up.",
	},
};

export const Small: Story = {
	args: {
		size: "sm",

		icon: <FolderOpen />,
	},
};

export const Large: Story = {
	args: {
		size: "lg",

		icon: <FolderOpen />,
	},
};
