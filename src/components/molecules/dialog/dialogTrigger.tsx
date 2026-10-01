import { Dialog as BaseDialog } from "@base-ui/react/dialog";

export type DialogTriggerProps = BaseDialog.Trigger.Props;

/**
 * A button that opens the dialog. Unstyled by default - pass your own
 * className, or use `render` to delegate rendering to an existing Button.
 */
const DialogTrigger = BaseDialog.Trigger;

export default DialogTrigger;
