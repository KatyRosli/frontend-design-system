export const themeTokenGroups = [
  {
    name: "Brand",
    tokens: [
      {
        name: "Primary",
        variable: "--primary",
        className: "bg-primary",
      },
      {
        name: "Primary Foreground",
        variable: "--primary-foreground",
        className: "bg-primary-foreground",
      },
      {
        name: "Secondary",
        variable: "--secondary",
        className: "bg-secondary",
      },
      {
        name: "Secondary Foreground",
        variable: "--secondary-foreground",
        className: "bg-secondary-foreground",
      },
    ],
  },

  {
    name: "Surface",
    tokens: [
      {
        name: "Background",
        variable: "--background",
        className: "bg-background",
      },
      {
        name: "Surface",
        variable: "--surface",
        className: "bg-surface",
      },
      {
        name: "Surface Elevated",
        variable: "--surface-elevated",
        className: "bg-surface-elevated",
      },
      {
        name: "Surface Subtle",
        variable: "--surface-subtle",
        className: "bg-surface-subtle",
      },
    ],
  },


  {
    name: "Text",
    tokens: [
      {
        name: "Foreground",
        variable: "--foreground",
        className: "bg-foreground",
      },
      {
        name: "Text Primary",
        variable: "--text-primary",
        className: "bg-text-primary",
      },
      {
        name: "Text Secondary",
        variable: "--text-secondary",
        className: "bg-text-secondary",
      },
      {
        name: "Text Disabled",
        variable: "--text-disabled",
        className: "bg-text-disabled",
      },
    ],
  },


  {
    name: "Feedback",
    tokens: [
      {
        name: "Success",
        variable: "--success",
        className: "bg-success",
      },
      {
        name: "Warning",
        variable: "--warning",
        className: "bg-warning",
      },
      {
        name: "Info",
        variable: "--info",
        className: "bg-info",
      },
      {
        name: "Danger",
        variable: "--danger",
        className: "bg-danger",
      },
    ],
  },


  {
    name: "Border",
    tokens: [
      {
        name: "Border",
        variable: "--border",
        className: "bg-border",
      },
    ],
  },
] as const;


export type ThemeTokenGroup =
  typeof themeTokenGroups[number];
