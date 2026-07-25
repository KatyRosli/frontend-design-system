import { StoryObj } from '@storybook/nextjs-vite';
import { default as LoginForm } from './loginForm';
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
declare const meta: {
    title: string;
    component: ({ email, password, emailError, passwordError, loading, onEmailChange, onPasswordChange, onSubmit, }: import('./loginForm').LoginFormProps) => import("react").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof LoginForm>;
export declare const Default: Story;
export declare const WithErrors: Story;
export declare const LoadingState: Story;
