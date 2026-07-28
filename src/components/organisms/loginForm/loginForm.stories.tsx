import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import LoginForm from './loginForm';

/**
 * LoginForm is an organism that combines
 * FormField molecules, input controls,
 * and a submit button into a complete
 * sign-in form.
 *
 * It provides a consistent authentication
 * experience while remaining presentational
 * and reusable across applications.
 */

const meta = {
    title: 'Components/Organisms/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};

export const WithErrors: Story = {
    args: {
        emailError: 'Please enter a valid email address',
        passwordError: 'Password must be at least 8 characters long',
    },
};
export const LoadingState: Story = {
    args: {
        loading: true,
    },
};