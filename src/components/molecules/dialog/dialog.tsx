import { Dialog as BaseDialog } from "@base-ui/react/dialog";

export type DialogProps = BaseDialog.Root.Props;

/**
 * Groups all parts of a dialog together. Renders no DOM element itself -
 * compose it with DialogPortal, DialogBackdrop, DialogPopup, DialogTitle,
 * DialogDescription and DialogClose.
 */
const Dialog = BaseDialog.Root;

export default Dialog;
