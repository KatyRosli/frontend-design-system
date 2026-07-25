export declare const avatarSizes: {
    readonly sm: {
        readonly avatar: "size-7";
        readonly indicator: "size-2";
    };
    readonly md: {
        readonly avatar: "size-8";
        readonly indicator: "size-2";
    };
    readonly lg: {
        readonly avatar: "size-9";
        readonly indicator: "size-3";
    };
    readonly xl: {
        readonly avatar: "size-10";
        readonly indicator: "size-3";
    };
};
export type AvatarSize = keyof typeof avatarSizes;
export declare const avatarStatusStyles: {
    readonly online: {
        readonly label: "Online";
        readonly className: "bg-success";
    };
    readonly away: {
        readonly label: "Away";
        readonly className: "bg-warning";
    };
    readonly busy: {
        readonly label: "Busy";
        readonly className: "bg-destructive";
    };
    readonly offline: {
        readonly label: "Offline";
        readonly className: "bg-offline";
    };
};
export type AvatarStatus = keyof typeof avatarStatusStyles;
export declare const avatarFallbackImage = "https://avatars.githubusercontent.com/u/96566968?s=400&u=10a4cfb65e5de63911ba0362bda8096f1bbfeb63&v=4";
