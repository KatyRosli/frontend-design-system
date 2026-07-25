import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Dropdown from "./dropdown";

import { dropdownSizes, dropdownStates } from "./dropdown.constants";

/**
 * Reusable Dropdown component that supports
 * different sizes, validation states, required fields,
 * helper text, error messages, and disabled states.
 * It provides an accessible selection control
 * with keyboard navigation and responsive layouts.
 */

const meta = {
	title: "Design System/Atoms/Dropdown",

	component: Dropdown,

	tags: ["autodocs"],

	args: {
		label: "Country",

		placeholder: "Select country",

		size: "md",

		state: "default",

		required: false,

		disabled: false,
	},

	argTypes: {
		size: {
			control: "radio",

			options: dropdownSizes,

			description: "Dropdown size.",
		},

		state: {
			control: "radio",

			options: dropdownStates,

			description: "Dropdown validation state.",
		},

		required: {
			control: "boolean",
		},

		disabled: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

const Items = () => (
	<>
		<Dropdown.Item value="sweden">Sweden</Dropdown.Item>

		<Dropdown.Item value="singapore">Singapore</Dropdown.Item>

		<Dropdown.Item value="japan">Japan</Dropdown.Item>
	</>
);

export const Playground: Story = {
	render: (args) => (
		<Dropdown {...args}>
			<Items />
		</Dropdown>
	),
};

export const Default: Story = {};

export const Required: Story = {
	args: {
		required: true,
	},
};

export const Error: Story = {
	args: {
		state: "error",

		errorMessage: "Please select a country.",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const Small: Story = {
	args: {
		size: "sm",
	},
};
