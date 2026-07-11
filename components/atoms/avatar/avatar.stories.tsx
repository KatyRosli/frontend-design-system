import Avatar from "@/components/atoms/avatar/avatar";
import {
	avatarSizes,
	avatarStatusStyles,
} from "@/components/atoms/avatar/avatar.constants";
import Button from "@/components/atoms/button/button";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn } from "storybook/test";
import { useState } from "react";

/**
 * Reusable Avatar component
 * that supports different sizes
 * and renders a placeholder image
 * when src attribute is not provided.
 * It also shows a presence indicator
 * when user is online.
 */

const meta = {
	title: "Design System/Atoms/Avatar",

	component: Avatar,

	args: {
		src: "https://avatars.githubusercontent.com/u/96566968?s=400&u=10a4cfb65e5de63911ba0362bda8096f1bbfeb63&v=4",

		alt: "Avatar image",

		size: "md",

		status: undefined,

		onClick: fn(),
	},

	argTypes: {
		size: {
			description: "Controls avatar size",

			control: {
				type: "radio",
			},

			options: Object.keys(avatarSizes),
		},

		status: {
			description: "Shows presence indicator",

			control: {
				type: "radio",
			},

			options: [undefined, ...Object.keys(avatarStatusStyles)],
		},

		src: {
			description: "Avatar image source",
		},

		fallback: {
			control: false,
		},
	},

	tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default = {} satisfies Story;

export const AllSizes = {
	render: () => (
		<div className="flex items-center gap-4">
			{Object.keys(avatarSizes).map((size) => (
				<Avatar key={size} size={size as keyof typeof avatarSizes} />
			))}
		</div>
	),
} satisfies Story;

export const AllStatuses = {
	render: () => (
		<div className="flex items-center gap-4">
			{Object.keys(avatarStatusStyles).map((status) => (
				<Avatar
					key={status}
					status={status as keyof typeof avatarStatusStyles}
				/>
			))}
		</div>
	),
} satisfies Story;

export const Placeholder = {
	args: {
		src: undefined,
	},
} satisfies Story;

export const InitialsFallback = {
	args: {
		src: undefined,
		fallback: "KR",
	},
} satisfies Story;

export const BrokenImage = {
	args: {
		src: "invalid-image-url",
	},
} satisfies Story;

export const Clickable = {
	args: {
		onClick: fn(),
	},

	play: async ({ args }) => {
		expect(args.onClick).toHaveBeenCalledTimes(0);
	},
} satisfies Story;

export const DynamicStatus = {
	argTypes: {
		status: {
			control: false,
		},
	},

	render: (args) => {
		const [status, setStatus] = useState<"online" | "offline">("offline");

		return (
			<div className="flex flex-col gap-4">
				<Avatar {...args} status={status} />

				<p>Status: {status}</p>

				<Button
					onClick={() =>
						setStatus((previous) =>
							previous === "online" ? "offline" : "online",
						)
					}
				>
					Toggle status
				</Button>
			</div>
		);
	},
} satisfies Story;
