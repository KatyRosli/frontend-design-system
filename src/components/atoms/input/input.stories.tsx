import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Input from "./input";

import { inputSizes, inputStates } from "./input.constants";

import { Search } from "lucide-react";

/**
 * Reusable Input component that supports
 * different sizes, validation states,
 * disabled states, and responsive layouts.
 * It provides a consistent text input control
 * for forms and user data entry.
 */

const meta = {
	title: "Components/Atoms/Input",

	component: Input,

	tags: ["autodocs"],

	args: {
		placeholder: "Enter text",

		size: "lg",

		state: "default",

		disabled: false,
	},

	argTypes: {
		size: {
			control: "radio",

			options: inputSizes,

			description: "Input size.",
		},

		state: {
			control: "radio",

			options: inputStates,

			description: "Input validation state.",
		},

		disabled: {
			control: "boolean",
		},

		placeholder: {
			control: "text",
		},
	},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Playground: Story = {};

export const Default: Story = {
	args: {
		placeholder: "Enter your name",
	},
};

export const Small: Story = {
	args: {
		size: "sm",

		placeholder: "Small input",
	},
};

export const Large: Story = {
	args: {
		size: "lg",

		placeholder: "Large input",
	},
};

export const Error: Story = {
	args: {
		state: "error",

		placeholder: "Invalid input",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,

		placeholder: "Disabled input",
	},
};

export const Password: Story = {
	args: {
		type: "password",

		placeholder: "Enter password",
	},
};

export const WithLeadingIcon: Story = {
	args: {
		placeholder: "Search...",
		startAdornment: <Search className="h-4 w-4 text-muted-foreground" />,
	},
};

export const WithTrailingIcon: Story = {
	args: {
		placeholder: "Search...",

		endAdornment: <Search className="h-4 w-4 text-muted-foreground" />,
	},
};
