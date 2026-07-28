import type {
  Meta,
  StoryObj,
} from "@storybook/nextjs-vite";


import Radius from "./radius";


/**
 * A consistent border radius system that defines the shape language of the design system.
 * It provides reusable radius tokens for components and surfaces, ensuring visual consistency
 * across buttons, inputs, cards, and other UI elements.
 * Radius values range from subtle rounding to fully circular shapes for avatars and pills.
 */


const meta = {

  title: "Foundations/Radius",

  component: Radius,

  tags: [
    "autodocs",
  ],

} satisfies Meta<typeof Radius>;


export default meta;


type Story = StoryObj<typeof meta>;


export const Scale: Story = {};
