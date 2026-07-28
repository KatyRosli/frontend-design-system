import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Typography from "./typography";

import { typographyVariantOptions } from "./typography.constants";

/**
 * A scalable typography system that defines text styles, hierarchy, and font usage across the design system. 
 * It provides consistent heading, body, label, and supporting text styles using Montserrat for headings and Inter for body content. 
 * Typography variants are designed to create clear visual hierarchy and consistent text experiences across all components.
 */

const meta = {
  title: "Foundations/Typography",

  component: Typography,

  tags: ["autodocs"],

  args: {
    variant: "bodyMd",

    as: "p",

    children: "The quick brown fox jumps over the lazy dog.",
  },

  argTypes: {
    variant: {
      control: "select",

      options: typographyVariantOptions,
    },

    as: {
      control: "select",

      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div"],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Scale: Story = {
  render: () => (
    <div
      className="
      bg-background
      text-foreground
      p-10
      space-y-8
    "
    >
      <Typography as="h1" variant="display">
        Display
      </Typography>

      <Typography as="h1" variant="h1">
        Heading 1
      </Typography>

      <Typography as="h2" variant="h2">
        Heading 2
      </Typography>

      <Typography as="h3" variant="h3">
        Heading 3
      </Typography>

      <Typography as="h4" variant="h4">
        Heading 4
      </Typography>

      <Typography as="h5" variant="h5">
        Heading 5
      </Typography>

      <Typography as="h6" variant="h6">
        Heading 6
      </Typography>

      <Typography variant="bodyLg">Body Large</Typography>

      <Typography variant="bodyMd">Body Medium</Typography>

      <Typography variant="bodySm">Body Small</Typography>

      <Typography variant="labelLg">Label Large (Large Button)</Typography>

      <Typography variant="labelMd">Label Medium (Default Button)</Typography>

      <Typography variant="labelSm">Label Small (Badge)</Typography>

      <Typography variant="caption">Caption text</Typography>

      <Typography variant="overline">OVERLINE</Typography>
    </div>
  ),
};
