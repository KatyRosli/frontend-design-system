export const avatarSizes = {
  sm: {
    avatar: "size-7",
    indicator: "size-2",
  },
  md: {
    avatar: "size-8",
    indicator: "size-2",
  },
  lg: {
    avatar: "size-9",
    indicator: "size-3",
  },
  xl: {
    avatar: "size-10",
    indicator: "size-3",
  },
} as const;

export type AvatarSize = keyof typeof avatarSizes;


export const avatarStatusStyles = {
  online: {
    label: "Online",
    className: "bg-green-500",
  },
  away: {
    label: "Away",
    className: "bg-yellow-400",
  },
  busy: {
    label: "Busy",
    className: "bg-red-500",
  },
  offline: {
    label: "Offline",
    className: "bg-gray-400",
  },
} as const;

export type AvatarStatus = keyof typeof avatarStatusStyles;


export const avatarFallbackImage =
  "https://avatars.githubusercontent.com/u/96566968?s=400&u=10a4cfb65e5de63911ba0362bda8096f1bbfeb63&v=4";

