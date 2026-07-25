export interface LoginFormProps {
    email?: string;
    password?: string;
    emailError?: string;
    passwordError?: string;
    loading?: boolean;
    onEmailChange: (value: string) => void;
    onPasswordChange: (value: string) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
declare const LoginForm: ({ email, password, emailError, passwordError, loading, onEmailChange, onPasswordChange, onSubmit, }: LoginFormProps) => import("react").JSX.Element;
export default LoginForm;
