export const colorSections = [
  {
    title: "Brand",
    colors: [
      {
        name: "Primary",
        className: "bg-brand-primary",
        textClassName: "text-brand-primary-foreground",
      },
    ],
  },
  {
    title: "Text",
    colors: [
      {
        name: "Primary",
        className: "bg-text-primary",
      },
      {
        name: "Secondary",
        className: "bg-text-secondary",
      },
      {
        name: "Disabled",
        className: "bg-text-disabled",
      },
    ],
  },
  {
    title: "Surface",
    colors: [
      {
        name: "Default",
        className: "bg-surface-default border",
      },
      {
        name: "Elevated",
        className: "bg-surface-elevated",
      },
      {
        name: "Subtle",
        className: "bg-surface-subtle",
      },
    ],
  },
] as const;