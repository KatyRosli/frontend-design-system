import { Dialog as BaseDialog } from "@base-ui/react/dialog";

export type DialogPortalProps = BaseDialog.Portal.Props;

/**
 * Moves the backdrop and popup to `<body>`. Wrap DialogBackdrop and
 * DialogPopup with this.
 */
const DialogPortal = BaseDialog.Portal;

export default DialogPortal;
