import type {
	Meta,
	StoryObj,
} from "@storybook/nextjs-vite";


const meta = {
	title: "Foundations/Colors",

	parameters: {
		layout: "fullscreen",
	},

	tags: ["autodocs"],

} satisfies Meta;


export default meta;


type Story = StoryObj;


const colorGroups = [
	{
		title: "Brand",

		colors: [
			{
				name: "Primary",
				className: "bg-brand-primary",
				token: "--brand-primary",
			},

			{
				name: "Primary Foreground",
				className: "bg-brand-primary-foreground",
				token: "--brand-primary-foreground",
			},
		],
	},


	{
		title: "Text",

		colors: [
			{
				name: "Primary",
				className: "bg-text-primary",
				token: "--text-primary",
			},

			{
				name: "Secondary",
				className: "bg-text-secondary",
				token: "--text-secondary",
			},

			{
				name: "Disabled",
				className: "bg-text-disabled",
				token: "--text-disabled",
			},
		],
	},


	{
		title: "Surface",

		colors: [
			{
				name: "Default",
				className: "bg-surface-default",
				token: "--surface-default",
			},

			{
				name: "Elevated",
				className: "bg-surface-elevated",
				token: "--surface-elevated",
			},

			{
				name: "Subtle",
				className: "bg-surface-subtle",
				token: "--surface-subtle",
			},
		],
	},
];



export const ColorPalette: Story = {

	render: () => (

		<div className="
			min-h-screen
			bg-background
			p-8
			text-foreground
		">

			<div className="space-y-12">


				{colorGroups.map((group) => (

					<section key={group.title}>


						<h2 className="
							mb-6
							text-2xl
							font-semibold
						">
							{group.title}
						</h2>



						<div className="
							grid
							gap-6
							sm:grid-cols-2
							lg:grid-cols-3
						">

							{group.colors.map((color) => (

								<div
									key={color.name}
									className="
										overflow-hidden
										rounded-xl
										border
										border-border
									"
								>


									<div
										className={`
											${color.className}
											h-32
										`}
									/>


									<div className="
										bg-card
										p-4
									">

										<h3 className="
											font-medium
										">
											{color.name}
										</h3>


										<p className="
											text-sm
											text-muted-foreground
										">
											{color.token}
										</p>

									</div>


								</div>

							))}

						</div>


					</section>

				))}


			</div>

		</div>

	),

};