export const motionTokens = [
  {
    name: "duration-instant",
    value: "100ms",
    usage: "Micro interactions such as icon feedback and state changes.",
  },

  {
    name: "duration-fast",
    value: "150ms",
    usage: "Hover states, focus states, and small component transitions.",
  },

  {
    name: "duration-normal",
    value: "250ms",
    usage: "Default transition duration for most components.",
  },

  {
    name: "duration-slow",
    value: "400ms",
    usage: "Large transitions such as drawers and modal movement.",
  },

] as const;


export const easingTokens = [
  {
    name: "ease-standard",
    value: "cubic-bezier(0.2, 0, 0, 1)",
    usage: "Default motion curve for interface transitions.",
  },

  {
    name: "ease-in",
    value: "cubic-bezier(0.4, 0, 1, 1)",
    usage: "Used when elements leave the interface.",
  },

  {
    name: "ease-out",
    value: "cubic-bezier(0, 0, 0.2, 1)",
    usage: "Used when elements enter the interface.",
  },

] as const;


export type MotionToken =
  typeof motionTokens[number];


export type EasingToken =
  typeof easingTokens[number];

  