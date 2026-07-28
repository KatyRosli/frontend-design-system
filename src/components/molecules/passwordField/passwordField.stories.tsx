import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import PasswordField from "./passwordField";

import { passwordFieldSizes } from "./passwordField.constants";

/**
 * Reusable PasswordField molecule that supports
 * password visibility toggling with an eye icon,
 * different icon sizes, disabled states,
 * and accessible password input interactions.
 *
 * It combines the Input atom with a visibility toggle
 * control for secure password entry.
 */

const meta = {
	title: "Components/Molecules/PasswordField",

	component: PasswordField,

	tags: ["autodocs"],

	args: {
		placeholder: "Enter password",

		disabled: false,

		iconSize: "lg",
	},

	argTypes: {
		iconSize: {
			control: "radio",

			options: passwordFieldSizes,

			description: "Password visibility icon size.",
		},

		disabled: {
			control: "boolean",
		},

		placeholder: {
			control: "text",
		},
	},
} satisfies Meta<typeof PasswordField>;

export default meta;

type Story = StoryObj<typeof PasswordField>;

export const Playground: Story = {};

export const Default: Story = {
	args: {
		placeholder: "Enter password",
	},
};

export const SmallIcon: Story = {
	args: {
		iconSize: "sm",
	},
};

export const LargeIcon: Story = {
	args: {
		iconSize: "lg",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,

		placeholder: "Disabled password",
	},
};

export const WithValue: Story = {
	args: {
		defaultValue: "secretpassword",
	},
};
