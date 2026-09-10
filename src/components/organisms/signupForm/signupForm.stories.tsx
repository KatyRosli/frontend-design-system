import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import SignupForm from "./signupForm";

/**
 * SignupForm is an organism that combines
 * FormField molecules, input controls,
 * and a submit button into a complete
 * sign-up form.
 *
 * It provides a consistent account creation
 * experience while remaining presentational
 * and reusable across applications.
 */

const meta = {
  title: "Components/Organisms/SignupForm",
  component: SignupForm,
  tags: ["autodocs"],
} satisfies Meta<typeof SignupForm>;

export default meta;

type Story = StoryObj<typeof SignupForm>;

const noop = () => {};

export const Default: Story = {
  args: {
    onChange: noop,
    onSubmit: noop,
  },
};

export const WithErrors: Story = {
  args: {
    onChange: noop,
    onSubmit: noop,
    firstNameError: "Please enter your first name",
    lastNameError: "Please enter your last name",
    emailError: "Please enter a valid email address",
    passwordError: "Password must be at least 8 characters long",
  },
};

export const LoadingState: Story = {
  args: {
    onChange: noop,
    onSubmit: noop,
    loading: true,
  },
};