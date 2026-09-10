import Button from "@/components/atoms/button/button";
import Input from "@/components/atoms/input/input";
import FormField from "@/components/molecules/formField/formField";
import PasswordField from "@/components/molecules/passwordField";

export interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignupFormProps {
  values?: Partial<SignupFormValues>;
  firstNameError?: string;
  lastNameError?: string;
  emailError?: string;
  passwordError?: string;
  loading?: boolean;
  onChange: (field: keyof SignupFormValues, value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function SignupForm({
  values = {},
  firstNameError,
  lastNameError,
  emailError,
  passwordError,
  loading = false,
  onChange,
  onSubmit,
}: SignupFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="First name" required errorMessage={firstNameError}>
          <Input
            required
            value={values.firstName ?? ""}
            onChange={(event) => onChange("firstName", event.target.value)}
            placeholder="First name"
            autoComplete="given-name"
          />
        </FormField>
        <FormField label="Last name" required errorMessage={lastNameError}>
          <Input
            required
            value={values.lastName ?? ""}
            onChange={(event) => onChange("lastName", event.target.value)}
            placeholder="Last name"
            autoComplete="family-name"
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Email" required errorMessage={emailError}>
          <Input
            required
            type="email"
            value={values.email ?? ""}
            onChange={(event) => onChange("email", event.target.value)}
            placeholder="name@email.com"
            autoComplete="email"
          />
        </FormField>
        <FormField label="Password" required errorMessage={passwordError}>
          <PasswordField
            required
            value={values.password ?? ""}
            onChange={(event) => onChange("password", event.target.value)}
            placeholder="Create a password"
            autoComplete="new-password"
          />
        </FormField>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        width="full"
        loading={loading}
      >
        {loading ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
}