import Button from "@/components/atoms/button/button";
import Input from "@/components/atoms/input/input";
import FormField from "@/components/molecules/formField/formField";
import PasswordField from "@/components/molecules/passwordField";

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

    const LoginForm = ({
        email = "",
        password = "",
        emailError,
        passwordError,
        loading = false,
        onEmailChange,
        onPasswordChange,
        onSubmit,
    }: LoginFormProps) => {
        return (
            <form onSubmit={onSubmit} className="flex w-full flex-col gap-6">
                <FormField
                    label="Email"
                    required
                    errorMessage={emailError}
                >
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => onEmailChange(e.target.value)}
                        placeholder="name@email.com"
                    />
                </FormField>
                <FormField
                    label="Password"
                    required
                    errorMessage={passwordError}
                >
                    <PasswordField
                        value={password}
                        onChange={(e) => onPasswordChange?.(e.target.value)}
                        placeholder="Enter password"
                    />
                </FormField>
                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    width="full"
                    className="w-full"
                    loading={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </Button>
            </form>
        );
    };
export default LoginForm;