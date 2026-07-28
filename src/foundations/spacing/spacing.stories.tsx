import type {
  Meta,
  StoryObj,
} from "@storybook/nextjs-vite";


import Spacing from "./spacing";


/**
 * A semantic spacing system that defines consistent layout rhythm across the design system.
 * It provides reusable spacing tokens from extra small to extra large sizes, ensuring consistent
 * padding, margins, and gaps across components and layouts.
 * Spacing values are based on a scalable 8px grid system with 4px precision for smaller UI elements.
 */


const meta = {

  title: "Foundations/Spacing",

  component: Spacing,

  tags: [
    "autodocs",
  ],


} satisfies Meta<typeof Spacing>;


export default meta;


type Story = StoryObj<typeof meta>;


export const Scale: Story = {};
