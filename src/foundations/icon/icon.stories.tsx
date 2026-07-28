import type {
  Meta,
  StoryObj,
} from "@storybook/nextjs-vite";

import {
  Search,
  User,
  Settings,
  Trash2,
  Check,
  AlertCircle,
} from "lucide-react";

import Icon from "./icon";

import {
  iconSizeOptions,
} from "./icon.constants";


/**
 * A consistent icon system that defines icon usage, sizing, and accessibility rules across the design system.
 * It provides reusable icon patterns using Lucide React, ensuring visual consistency through standardized sizes,
 * stroke weight, and alignment across all components.
 * Icons are designed to support recognition, communicate actions, and enhance user interfaces while maintaining accessibility best practices.
 */


const meta = {

  title: "Foundations/Icons",

  component: Icon,

  tags: [
    "autodocs",
  ],


  args: {

    icon: Search,

    size: "md",

  },


  argTypes: {

    icon: {
      control: false,
    },


    size: {

      control: "select",

      options: iconSizeOptions,

    },

  },


} satisfies Meta<typeof Icon>;


export default meta;


type Story = StoryObj<typeof meta>;



export const Playground: Story = {};



export const Sizes: Story = {

  render: () => (

    <div className="
      flex
      items-center
      gap-8
    ">

      <Icon
        icon={Search}
        size="xs"
      />

      <Icon
        icon={Search}
        size="sm"
      />

      <Icon
        icon={Search}
        size="md"
      />

      <Icon
        icon={Search}
        size="lg"
      />

      <Icon
        icon={Search}
        size="xl"
      />

    </div>

  ),

};



export const CommonIcons: Story = {

  render: () => (

    <div className="
      flex
      items-center
      gap-6
    ">

      <Icon icon={User}/>

      <Icon icon={Settings}/>

      <Icon icon={Trash2}/>

      <Icon icon={Check}/>

      <Icon icon={AlertCircle}/>

    </div>

  ),

};

