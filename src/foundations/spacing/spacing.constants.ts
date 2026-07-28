export const spacingTokens = [
  {
    name: "spacing-xs",
    value: "4px",
    className: "p-[4px]",
    usage: "Small gaps between icons, labels, and compact UI elements.",
  },

  {
    name: "spacing-sm",
    value: "8px",
    className: "p-[8px]",
    usage: "Spacing between closely related elements.",
  },

  {
    name: "spacing-md",
    value: "16px",
    className: "p-[16px]",
    usage: "Default spacing used across components.",
  },

  {
    name: "spacing-lg",
    value: "24px",
    className: "p-[24px]",
    usage: "Spacing between component groups and sections.",
  },

  {
    name: "spacing-xl",
    value: "32px",
    className: "p-[32px]",
    usage: "Large layout spacing and page sections.",
  },
] as const;


export type SpacingToken =
  typeof spacingTokens[number];

