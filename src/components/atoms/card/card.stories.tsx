import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Card from "./card";

import { cardVariants } from "./card.constants";

import Typography from "@/foundations/typography";

/**
 * Reusable Card component
 * used as a container for related content.
 *
 * Supports different styles:
 * - default
 * - outlined
 * - elevated
 *
 * Dimensions should be controlled
 * through className to match the
 * content being displayed.
 */

const meta = {
  title: "Components/Atoms/Card",

  component: Card,

  args: {
    variant: "default",
  },

  argTypes: {
    variant: {
      description: "Controls the visual style of the card",

      control: {
        type: "radio",
      },

      options: Object.keys(cardVariants),
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80 p-6">
      <Typography
        as="h3"
        variant="h5"
      >
        Default card
      </Typography>

      <Typography
        as="p"
        variant="bodySm"
        className="mt-2 text-muted-foreground"
      >
        A simple card using the default surface.
      </Typography>
    </Card>
  ),
};

export const Outlined: Story = {
  render: () => (
    <Card
      variant="outlined"
      className="w-80 p-6"
    >
      <Typography
        as="h3"
        variant="h5"
      >
        Outlined card
      </Typography>

      <Typography
        as="p"
        variant="bodySm"
        className="mt-2 text-muted-foreground"
      >
        Useful when you want a stronger boundary.
      </Typography>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card
      variant="elevated"
      className="w-80 p-6"
    >
      <Typography
        as="h3"
        variant="h5"
      >
        Elevated card
      </Typography>

      <Typography
        as="p"
        variant="bodySm"
        className="mt-2 text-muted-foreground"
      >
        Useful for content that should sit above the page.
      </Typography>
    </Card>
  ),
};
