export const radiusTokens = [
  {
    name: "radius-sm",
    value: "4px",
    className: "rounded-sm",
    usage: "Small elements such as badges, tags, and compact controls.",
  },

  {
    name: "radius-md",
    value: "8px",
    className: "rounded-md",
    usage: "Default radius used for buttons, inputs, and components.",
  },

  {
    name: "radius-lg",
    value: "12px",
    className: "rounded-lg",
    usage: "Cards, dialogs, dropdowns, and elevated surfaces.",
  },

  {
    name: "radius-xl",
    value: "16px",
    className: "rounded-xl",
    usage: "Large containers and prominent UI sections.",
  },

  {
    name: "radius-full",
    value: "9999px",
    className: "rounded-full",
    usage: "Circular elements and pill-shaped components.",
  },

] as const;


export type RadiusToken =
  typeof radiusTokens[number];

  