export const buttonSizes = {


	sm:{
		height:"h-10",
		padding:"px-4",
		label:"labelMd",
		icon:"size-4",
	},


	lg:{
		height:"h-12",
		padding:"px-6",
		label:"labelLg",
		icon:"size-5",
	},


} as const;



export const buttonVariants = [

	"primary",

	"secondary",

	"success",

	"danger",

	"text",

	"link",

] as const;



export const buttonWidths=[

	"auto",

	"full",

] as const;



export type ButtonSize =
	keyof typeof buttonSizes;


export type ButtonVariant =
	(typeof buttonVariants)[number];


export type ButtonWidth =
	(typeof buttonWidths)[number];
