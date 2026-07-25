import type {
	Meta,
	StoryObj,
} from "@storybook/nextjs-vite";

import Typography from "./typography";

import {
	typographyVariantOptions,
} from "./typography.constants";

/**
 * Typography defines the visual hierarchy
 * of the design system.
 *
 * It provides consistent styles for headings,
 * body text, captions and overlines while
 * preserving semantic HTML through the `as` prop.
 */

const meta = {
	title: "Design System/Atoms/Typography",

	component: Typography,

	tags: ["autodocs"],

	args: {
		variant: "body",

		as: "p",

		children:
			"The quick brown fox jumps over the lazy dog.",
	},

	argTypes: {
		variant: {
			control: "select",

			options: typographyVariantOptions,

			description:
				"Visual typography style.",
		},

		as: {
			control: "select",

			options: [
				"h1",
				"h2",
				"h3",
				"h4",
				"h5",
				"h6",
				"p",
				"span",
				"div",
			],

			description:
				"Semantic HTML element.",
		},
	},
} satisfies Meta<typeof Typography>;


export default meta;


type Story = StoryObj<typeof Typography>;

export const Playground: Story = {
};

export const TypographyScale: Story = {
	render: () => (
		<div className="flex flex-col gap-8">
			<section>
				<Typography
					as="h1"
					variant="display"
				>
					Display
				</Typography>

				<p className="text-sm text-muted-foreground">
					Marketing hero / large promotional text
				</p>
			</section>


			<section>
				<Typography
					as="h1"
					variant="h1"
				>
					Heading 1
				</Typography>

				<p className="text-sm text-muted-foreground">
					Page title
				</p>
			</section>


			<section>
				<Typography
					as="h2"
					variant="h2"
				>
					Heading 2
				</Typography>

				<p className="text-sm text-muted-foreground">
					Section title
				</p>
			</section>


			<section>
				<Typography
					as="h3"
					variant="h3"
				>
					Heading 3
				</Typography>

				<p className="text-sm text-muted-foreground">
					Card or component title
				</p>
			</section>


			<section>
				<Typography
					as="h4"
					variant="h4"
				>
					Heading 4
				</Typography>
			</section>


			<section>
				<Typography
					as="h5"
					variant="h5"
				>
					Heading 5
				</Typography>
			</section>


			<section>
				<Typography
					as="h6"
					variant="h6"
				>
					Heading 6
				</Typography>
			</section>


			<section>
				<Typography variant="bodyLg">
					Body Large — used for introductions or important paragraphs.
				</Typography>
			</section>


			<section>
				<Typography variant="body">
					Body — default text style for application content.
				</Typography>
			</section>


			<section>
				<Typography variant="bodySm">
					Body Small — supporting information.
				</Typography>
			</section>


			<section>
				<Typography variant="caption">
					Caption — metadata and secondary information.
				</Typography>
			</section>


			<section>
				<Typography variant="overline">
					Overline
				</Typography>
			</section>

		</div>
	),
};