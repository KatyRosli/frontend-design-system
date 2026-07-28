import type {
  Meta,
  StoryObj,
} from "@storybook/nextjs-vite";


import Themes from "./theme";


const meta = {

  title: "Foundations/Theme",

  component: Themes,

  tags: [
    "autodocs",
  ],


  parameters: {

    docs: {

      description: {

        component:
          "A semantic theme system that defines brand colours, surfaces, text, borders, and feedback states. The theme supports both light and dark modes using design tokens so components remain consistent across different visual contexts.",

      },

    },

  },


} satisfies Meta<typeof Themes>;


export default meta;


type Story = StoryObj<typeof meta>;



export const Overview: Story = {};
