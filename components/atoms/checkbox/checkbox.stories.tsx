import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import Checkbox from "./checkbox";

import { checkboxVariants } from "./checkbox.constants";

/**
 * Reusable Checkbox component that supports
 * different sizes, validation states, required fields,
 * descriptions, error messages, and indeterminate states.
 * It provides accessible selection controls
 * for forms and multi-selection patterns.
 */

const meta = {
	title: "Design System/Atoms/Checkbox",

	component: Checkbox,

	tags: ["autodocs"],

	args: {
		label: "Accept terms and conditions",

		description: "I agree with the privacy policy.",

		onChange: fn(),
	},

	argTypes: {
		variant: {
			control: "radio",

			options: Object.keys(checkboxVariants),

			description: "Controls checkbox visual state.",
		},

		disabled: {
			control: "boolean",
		},

		indeterminate: {
			control: "boolean",
		},

		required: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
	args: {
		defaultChecked: true,
	},
};

export const Indeterminate: Story = {
	args: {
		indeterminate: true,

		label: "Select all items",

		description: "Some items are selected",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,

		label: "Marketing emails",

		description: "Disabled option",
	},
};

export const Required: Story = {
	args: {
		required: true,

		label: "Accept terms and conditions",
	},
};

export const Error: Story = {
	args: {
		variant: "error",

		required: true,

		label: "Accept terms",

		errorMessage: "You must accept before continuing.",
	},
};

export const WithoutDescription: Story = {
	args: {
		description: undefined,
	},
};
