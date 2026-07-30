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
        readonly className: "bg-danger";
    };
    readonly offline: {
        readonly label: "Offline";
        readonly className: "bg-text-disabled";
    };
};
export type AvatarStatus = keyof typeof avatarStatusStyles;
