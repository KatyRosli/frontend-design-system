import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Dialog from "./dialog";
import DialogTrigger from "./dialogTrigger";
import DialogPortal from "./dialogPortal";
import DialogBackdrop from "./dialogBackdrop";
import DialogPopup from "./dialogPopup";
import DialogTitle from "./dialogTitle";
import DialogDescription from "./dialogDescription";
import DialogClose from "./dialogClose";

import Button from "@/components/atoms/button";
import Typography from "@/foundations/typography";

/**
 * A composable dialog built on Base UI's Dialog primitive: focus trap,
 * scroll lock, and Escape/outside-press dismissal come for free.
 *
 * Compose it from its parts:
 * - `Dialog` - groups everything, controls open state
 * - `DialogTrigger` - opens it (optional if you control `open` yourself)
 * - `DialogPortal` - renders the backdrop/popup into `<body>`
 * - `DialogBackdrop` - the dimmed overlay
 * - `DialogPopup` - the panel; `variant="center"` (default) or `variant="right"`
 *   (a drawer that's full-screen below the `sm` breakpoint), each with
 *   `size="sm" | "md" | "lg"`
 * - `DialogTitle` / `DialogDescription` - wired up for accessibility automatically
 * - `DialogClose` - a button that closes the dialog (defaults to an X icon)
 */
const meta = {
  title: "Components/Molecules/Dialog",

  component: Dialog,

  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Center: Story = {
  render: () => (
    <div className="flex align-center justify-center">
      <Dialog>
        <DialogTrigger
          render={<Button variant="primary">Delete image</Button>}
        />

        <DialogPortal>
          <DialogBackdrop />

          <DialogPopup variant="center" size="sm" className="p-6">
            <DialogTitle>Delete image?</DialogTitle>

            <DialogDescription className="mt-2">
              Are you sure you want to delete this image? This action cannot be
              undone.
            </DialogDescription>

            <div className="mt-6 flex justify-end gap-3">
              <DialogClose render={<Button variant="secondary" size="sm" />}>
                Cancel
              </DialogClose>
              <DialogClose render={<Button variant="danger" size="sm" />}>
                Delete
              </DialogClose>
            </div>
          </DialogPopup>
        </DialogPortal>
      </Dialog>
    </div>
  ),
};

export const RightDrawer: Story = {
  render: () => (
    <div className="flex align-center justify-center">
      <Dialog>
        <DialogTrigger
          render={<Button variant="primary">Write a note</Button>}
        />

        <DialogPortal>
          <DialogBackdrop />

          <DialogPopup variant="right" size="md" className="flex flex-col">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <DialogTitle>Write a note</DialogTitle>
              <DialogClose />
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              <Typography
                as="p"
                variant="bodyMd"
                className="text-text-secondary"
              >
                Drawer content - e.g. a rich text editor - goes here. Below the
                `sm` breakpoint this panel takes the full screen instead of
                anchoring to the right edge.
              </Typography>
            </div>

            <div className="border-t border-border px-6 py-4">
              <DialogClose
                render={
                  <Button variant="primary" width="full" className="w-full" />
                }
              >
                Save
              </DialogClose>
            </div>
          </DialogPopup>
        </DialogPortal>
      </Dialog>
    </div>
  ),
};

export const LeftDrawer: Story = {
  render: () => (
    <div className="flex align-center justify-center">
      <Dialog>
        <DialogTrigger
          render={<Button variant="primary">Write a note</Button>}
        />

        <DialogPortal>
          <DialogBackdrop />

          <DialogPopup variant="left" size="md" className="flex flex-col">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <DialogTitle>Write a note</DialogTitle>
              <DialogClose />
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              <Typography
                as="p"
                variant="bodyMd"
                className="text-text-secondary"
              >
                Drawer content - e.g. a rich text editor - goes here. Below the
                `sm` breakpoint this panel takes the full screen instead of
                anchoring to the left edge.
              </Typography>
            </div>

            <div className="border-t border-border px-6 py-4">
              <DialogClose
                render={
                  <Button variant="primary" width="full" className="w-full" />
                }
              >
                Save
              </DialogClose>
            </div>
          </DialogPopup>
        </DialogPortal>
      </Dialog>
    </div>
  ),
};

export const BottomDrawer: Story = {
  render: () => (
    <div className="flex align-center justify-center">
      <Dialog>
        <DialogTrigger
          render={<Button variant="primary">Write a note</Button>}
        />

        <DialogPortal>
          <DialogBackdrop />

          <DialogPopup variant="bottom" size="md" className="flex flex-col">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <DialogTitle>Login</DialogTitle>
              <DialogClose />
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              <Typography
                as="p"
                variant="bodyMd"
                className="text-text-secondary"
              >
                Drawer content - e.g. a rich text editor - goes here. Below the
                `sm` breakpoint this panel takes the full screen instead of
                anchoring to the left edge.
              </Typography>
            </div>

            <div className="border-t border-border px-6 py-4">
              <DialogClose
                render={
                  <Button variant="primary" width="full" className="w-full" />
                }
              >
                Save
              </DialogClose>
            </div>
          </DialogPopup>
        </DialogPortal>
      </Dialog>
    </div>
  ),
};
