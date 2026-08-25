import "../src/styles/globals.css";

import type { Preview } from "@storybook/nextjs-vite";

import { Inter, Montserrat } from "next/font/google";

import { cn } from "../src/lib/utils";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === "dark";

      return (
        <div
          className={cn(
            inter.variable,
            montserrat.variable,
            isDark && "dark",
            "min-h-screen",
            "bg-background",
            "text-foreground",
            "p-8",
         )}
      >
          <Story />
        </div>
      );
    },
  ],

  globalTypes: {
    theme: {
      description: "Global theme",

      defaultValue: "light",

      toolbar: {
        title: "Theme",

        icon: "paintbrush",

        items: [
          {
            value: "light",
            title: "Light",
          },
          {
            value: "dark",
            title: "Dark",
          },
        ],
      },
    },

    viewport: {
      description: "Viewport size",

      defaultValue: "responsive",

      toolbar: {
        title: "Viewport",

        icon: "browser",

        items: [
          {
            value: "responsive",
            title: "Responsive",
          },
          {
            value: "mobile1",
            title: "Mobile",
          },
          {
            value: "tablet",
            title: "Tablet",
          },
          {
            value: "desktop",
            title: "Desktop",
          },
        ],
      },
    },
  },

  parameters: {
    backgrounds: {
      disable: true,
    },

    viewport: {
      options: {
        mobile1: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
        },

        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },

        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
      },
    },

    options: {
      storySort: {
        order: [
          "Documentations",
          [
            "Introduction",
            "Design Principles",
            "Accessibility",
            "Voice and Tone",
          ],

          "Foundations",
          ["Typography", "Theme", "Spacing", "Icons", "Radius", "Motion"],

          "Components",
          [
            "Atoms",
            [
              "Avatar",
              "Button",
              "Checkbox",
              "Dropdown",
              "Input",
              "Skeleton",
              "Spinner",
            ],

            "Molecules",
            ["EmptyState", "FormField", "PasswordField"],

            "Organisms",
            ["LoginForm"],
          ],
        ],
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,

        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },
};

export default preview;
