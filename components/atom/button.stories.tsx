import Button from "@/components/atom/button";
import {Meta, StoryObj} from "@storybook/nextjs-vite";
import { Bell, Pen, Plus, ThumbsUp } from "lucide-react";
import { fn } from "storybook/test";

const meta = {
  title: "Design System/Atom/Button",
  component: Button,
  args: {
    children: "Button"
  }
} satisfies Meta <typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary = {
  args: { 
    children: ( 
      <> 
        <Plus />
        <span> Add to Story </span> 
      </>
    )
  }
} satisfies Story;

export const Secondary = {
  args: { 
    children: ( 
      <> 
        <Pen />
        <span> Edit profile </span> 
      </>
    )
  }
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true
  }
} satisfies Story;
