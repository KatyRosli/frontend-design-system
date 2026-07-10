import Avatar, { Size } from "@/components/atom/avatar";
import { Button } from "@/components/ui/button";
import { StoryObj, type Meta } from "@storybook/nextjs-vite";
import { useState } from "react";
import { expect, fn } from "storybook/test";

const sizeOptions: Size[] = ["sm", "md", "lg", "xl"];

/**
 * Reusable Avatar component
 * that supports different sizes
 * and render placeholder image
 * when src attribute is not provided,
 * and also it shows presence indicator
 * when user is online.
 * */

const meta = {
  title: "Design System/Atom/Avatar",
  component: Avatar,
  args: {
    src: "https://avatars.githubusercontent.com/u/96566968?s=400&u=10a4cfb65e5de63911ba0362bda8096f1bbfeb63&v=4",
    alt: "avatar image",
    isOnline: false,
    size: "md",
    onClick: fn()
  },
  argTypes: {
    src: {
      description:
        "Image source, if the attribute is not provided, then avatar will show placeholder image."
    },
    alt: {
      description:
        "Optional, the text will be showing up somehow image is not available."
    },
    isOnline: {
      description: "If true, avatar will have presence indicator."
    },
    size: {
      description: "Default md, it changes avatar size.",
      control: { type: "radio" },
      options: sizeOptions
    },
    onClick: {
      description: "Demo purpose, remove later."
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default = {} satisfies Story;
export const Small = {
  args: {
    size: "sm"
  }
} satisfies Story;
export const Large = {
  args: {
    size: "lg"
  }
} satisfies Story;
export const XLarge = {
  args: {
    size: "xl"
  }
} satisfies Story;

export const OnlineIndicator = {
  args: {
    isOnline: true
  }
} satisfies Story;

export const PlaceholderImage = {
  args: {
    src: "Invalid Image"
  }
} satisfies Story;

export const DynamicPresenceIndicator = {
  argTypes: {
    isOnline: {
      control: { disable: true }
    }
  },
  render: (args) => {
    const [isOnline, setIsOnline] = useState<boolean>(false);

    return (
      <div className="flex flex-col gap-4 items-start">
        <Avatar {...args} isOnline={isOnline} />

        <p>Is Online: {JSON.stringify(isOnline)}</p>
        <Button onClick={() => setIsOnline((prev) => !prev)}>
          {isOnline ? "Disconnect" : "Connect!"}
        </Button>
      </div>
    );
  },
  play: async ({ canvas, userEvent }) => {
    const button = await canvas.findByRole("button", { name: /connect/gi });
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    const indicator = await canvas.findByTestId("presence-indicator");

    expect(indicator).toBeInTheDocument();
  }
} satisfies Story;