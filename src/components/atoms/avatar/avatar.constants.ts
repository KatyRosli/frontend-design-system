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


export type AvatarSize =
	keyof typeof avatarSizes;



export const avatarStatusStyles = {
	online: {
		label: "Online",
		className: "bg-success",
	},

	away: {
		label: "Away",
		className: "bg-warning",
	},

	busy: {
		label: "Busy",
		className: "bg-danger",
	},

	offline: {
		label: "Offline",
		className: "bg-text-disabled",
	},
} as const;


export type AvatarStatus =
	keyof typeof avatarStatusStyles;