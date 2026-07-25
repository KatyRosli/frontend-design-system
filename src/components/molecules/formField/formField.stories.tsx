import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Input from "@/components/atoms/input";

import PasswordField from "@/components/molecules/passwordField";

import FormField from "./formField";

import { formFieldSpacings } from "./formField.constants";

/**
 * Reusable FormField molecule that provides
 * consistent form layouts with labels,
 * required indicators, helper text,
 * and validation error messages.
 *
 * It wraps input components such as Input,
 * PasswordField, Dropdown, and Checkbox.
 */

const meta = {
	title: "Design System/Molecules/FormField",

	component: FormField,

	tags: ["autodocs"],

	args: {
		label: "Email address",

		description: "We will never share your email.",

		required: false,

		spacing: "md",
	},

	argTypes: {
		spacing: {
			control: "radio",

			options: formFieldSpacings,

			description: "Form field spacing.",
		},

		required: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof FormField>;

export const Playground: Story = {
	render: (args) => (
		<FormField {...args}>
			<Input placeholder="Enter email" />
		</FormField>
	),
};

export const Default: Story = {
	render: () => (
		<FormField label="Email" description="Enter your work email.">
			<Input placeholder="name@email.com" />
		</FormField>
	),
};

export const Required: Story = {
	render: () => (
		<FormField label="Username" required>
			<Input placeholder="Enter username" />
		</FormField>
	),
};

export const Error: Story = {
	render: () => (
		<FormField
			label="Password"
			errorMessage="Password must be at least 8 characters."
			required
		>
			<PasswordField placeholder="Enter password" />
		</FormField>
	),
};

export const WithPasswordField: Story = {
	render: () => (
		<FormField label="Password" description="Use a strong password.">
			<PasswordField />
		</FormField>
	),
};
