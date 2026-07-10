import Checkbox from "./checkbox";

import type {
	Meta,
	StoryObj,
} from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import {
	checkboxSizes,
	checkboxVariants,
} from "./checkbox.constants";

/**
 * Reusable Checkbox component that supports
 * different sizes, validation states, required fields,
 * descriptions, error messages, and indeterminate states.
 * It provides accessible selection controls
 * for forms and multi-selection patterns.
 */

const meta = {

	title:
		"Design System/Atoms/Checkbox",

	component:
		Checkbox,

	tags:[
		"autodocs"
	],


	args:{

		label:
			"Accept terms and conditions",

		description:
			"I agree with the privacy policy.",

		onChange:
			fn(),

	},

	argTypes:{


		size:{

			control:"radio",

			options:
				Object.keys(checkboxSizes) as Array<keyof typeof checkboxSizes>,

			description:
				"Controls checkbox size."

		},



		variant:{

			control:"radio",

			options:
				Object.keys(checkboxVariants),

			description:
				"Controls checkbox visual state."

		},



		disabled:{

			control:"boolean",

		},


		indeterminate:{

			control:"boolean",

		},

	},


} satisfies Meta<typeof Checkbox>;



export default meta;



type Story =
StoryObj<typeof Checkbox>;



export const Default = {} satisfies Story;



export const Required = {

	args:{

		required:true,

		label:
			"Accept terms and conditions",

	},

} satisfies Story;



export const Checked = {

	args:{

		defaultChecked:true,

	},

} satisfies Story;



export const Indeterminate = {

	args:{

		indeterminate:true,

		label:
			"Select all items",

		description:
			"Some items are selected",

	},

} satisfies Story;



export const Disabled = {

	args:{

		disabled:true,

		label:
			"Marketing emails",

	},

} satisfies Story;



export const ErrorMessage = {

	args:{

		variant:"error",

		required:true,

		label:
			"Accept terms and conditions",

		errorMessage:
			"You must accept before continuing.",

	},

} satisfies Story;



export const WithoutDescription = {

	args:{

		description:
			undefined,

	},

} satisfies Story;