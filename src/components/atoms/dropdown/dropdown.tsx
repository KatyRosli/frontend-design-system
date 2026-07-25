"use client";

import * as React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";

import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

import {
	dropdownContentVariants,
	dropdownTriggerVariants,
	type DropdownSize,
	type DropdownState,
} from "./dropdown.constants";

export interface DropdownProps extends React.ComponentPropsWithoutRef<
	typeof SelectPrimitive.Root
> {
	label?: string;

	placeholder?: string;

	helperText?: string;

	errorMessage?: string;

	required?: boolean;

	size?: DropdownSize;

	state?: DropdownState;

	children: React.ReactNode;
}

const Dropdown = ({
	label,
	placeholder = "Select option",
	helperText,
	errorMessage,
	required,
	size = "md",
	state = "default",
	children,
	...props
}: DropdownProps) => {
	const hasError = state === "error";

	return (
		<div className="flex w-full flex-col gap-2">
			{label && (
				<label className="text-sm font-medium text-foreground">
					{label}

					{required && <span className="ml-1 text-destructive">*</span>}
				</label>
			)}

			<SelectPrimitive.Root {...props}>
				<DropdownTrigger size={size} state={hasError ? "error" : "default"}>
					<SelectPrimitive.Value placeholder={placeholder} />
				</DropdownTrigger>

				<DropdownContent size={size}>{children}</DropdownContent>
			</SelectPrimitive.Root>

			{hasError && errorMessage ? (
				<p className="text-sm text-destructive">{errorMessage}</p>
			) : helperText ? (
				<p className="text-sm text-muted-foreground">{helperText}</p>
			) : null}
		</div>
	);
};

const DropdownTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
		size?: DropdownSize;
		state?: DropdownState;
	}
>(({ className, size, state, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={cn(
			dropdownTriggerVariants({
				size,
				state,
			}),
			className,
		)}
		{...props}
	>
		{children}

		<SelectPrimitive.Icon asChild>
			<ChevronDown className="h-4 w-4 opacity-50" />
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
));

DropdownTrigger.displayName = SelectPrimitive.Trigger.displayName;

const DropdownContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
		size?: DropdownSize;
	}
>(({ className, children, size, ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={cn(
				dropdownContentVariants({
					size,
				}),
				className,
			)}
			{...props}
		>
			<SelectPrimitive.ScrollUpButton className="flex justify-center py-1">
				<ChevronUp className="h-4 w-4" />
			</SelectPrimitive.ScrollUpButton>

			<SelectPrimitive.Viewport className="p-1">
				{children}
			</SelectPrimitive.Viewport>

			<SelectPrimitive.ScrollDownButton className="flex justify-center py-1">
				<ChevronDown className="h-4 w-4" />
			</SelectPrimitive.ScrollDownButton>
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
));

DropdownContent.displayName = SelectPrimitive.Content.displayName;

const DropdownItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={cn(
			"relative flex cursor-default select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm outline-none",
			"focus:bg-accent focus:text-accent-foreground",
			"data-disabled:pointer-events-none data-disabled:opacity-50",
			className,
		)}
		{...props}
	>
		<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<SelectPrimitive.ItemIndicator>
				<Check className="h-4 w-4" />
			</SelectPrimitive.ItemIndicator>
		</span>

		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
));

DropdownItem.displayName = SelectPrimitive.Item.displayName;

Dropdown.Item = DropdownItem;

export default Dropdown;

export { DropdownTrigger, DropdownContent, DropdownItem };
