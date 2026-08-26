import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import AppearanceToggle from "./appearanceToggle";

import {
  appearanceModes,
  appearanceToggleSizes,
} from "./appearanceToggle.constants";

/**
 * Reusable AppearanceToggle molecule for switching
 * between light and dark appearance modes.
 *
 * The component is controlled by the consuming application
 * through the appearance and onAppearanceChange props.
 */

const meta = {
  title: "Components/Molecules/AppearanceToggle",

  component: AppearanceToggle,

  tags: ["autodocs"],

  args: {
    appearance: "light",

    size: "md",

    onAppearanceChange: () => {},
  },

  argTypes: {
    appearance: {
      control: "radio",

      options: appearanceModes,

      description: "Current appearance mode.",
    },

    size: {
      control: "radio",

      options: appearanceToggleSizes,

      description: "Appearance toggle size.",
    },

    onAppearanceChange: {
      action: "appearance changed",

      description: "Called when the appearance changes.",
    },
  },
} satisfies Meta<typeof AppearanceToggle>;

export default meta;

type Story = StoryObj<typeof AppearanceToggle>;

export const Playground: Story = {};

export const Light: Story = {
  args: {
    appearance: "light",
  },
};

export const Dark: Story = {
  args: {
    appearance: "dark",
  },
};

export const Small: Story = {
  args: {
    appearance: "light",

    size: "sm",
  },
};

export const Large: Story = {
  args: {
    appearance: "light",

    size: "lg",
  },
};
