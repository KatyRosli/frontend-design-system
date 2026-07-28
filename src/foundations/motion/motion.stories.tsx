import type {
  Meta,
  StoryObj,
} from "@storybook/nextjs-vite";


import Motion from "./motion";


/**
 * A motion system that defines animation timing and easing principles across the design system.
 * It provides consistent transition behaviour for components through reusable duration and easing tokens.
 * Motion guidelines help create interfaces that feel responsive, intentional, and accessible.
 */


const meta = {

  title: "Foundations/Motion",

  component: Motion,

  tags: [
    "autodocs",
  ],

} satisfies Meta<typeof Motion>;


export default meta;


type Story = StoryObj<typeof meta>;


export const Tokens: Story = {};
