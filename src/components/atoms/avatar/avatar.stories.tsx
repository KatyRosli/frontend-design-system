import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn, expect } from "storybook/test";

import Avatar from "./avatar";

import { avatarSizes, avatarStatusStyles } from "./avatar.constants";

/**
 * A reusable avatar component that displays user identity through images,
 * initials fallback, and presence indicators.
 *
 * Supports multiple sizes, fallback states, and semantic status indicators.
 * Uses design system theme tokens, typography tokens, and icon foundations
 * for consistent experiences across applications.
 */

const meta = {
  title: "Components/Atoms/Avatar",

  component: Avatar,

  tags: ["autodocs"],

  args: {
    size: "md",

    status: undefined,

    name: "Katy Rosli",

    onClick: fn(),
  },

  argTypes: {
    size: {
      description: "Controls avatar size",

      control: "radio",

      options: Object.keys(avatarSizes),
    },

    status: {
      description: "Shows presence indicator",

      control: "radio",

      options: [undefined, ...Object.keys(avatarStatusStyles)],
    },

    src: {
      description: "Avatar image source",
    },

    name: {
      description: "Generates initials when image is unavailable",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-md">
      {Object.keys(avatarSizes).map((size) => (
        <Avatar
          key={size}
          size={size as keyof typeof avatarSizes}
          name="Katy Rosli"
        />
      ))}
    </div>
  ),
};

export const Status: Story = {
  render: () => (
    <div className="flex items-center gap-md">
      {Object.keys(avatarStatusStyles).map((status) => (
        <Avatar
          key={status}
          status={status as keyof typeof avatarStatusStyles}
          name="Katy Rosli"
        />
      ))}
    </div>
  ),
};

export const Image: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",

    name: "Katy Rosli",
  },
};

export const InitialsFallback: Story = {
  args: {
    src: undefined,

    name: "Katy Rosli",
  },
};

export const IconFallback: Story = {
  args: {
    src: undefined,

    name: undefined,
  },
};

export const Clickable: Story = {
  args: {
    onClick: fn(),
  },

  play: async ({ args }) => {
    expect(args.onClick).toHaveBeenCalledTimes(0);
  },
};
