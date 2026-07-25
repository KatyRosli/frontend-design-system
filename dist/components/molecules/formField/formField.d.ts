import { ReactNode, HTMLAttributes } from 'react';
import { FormFieldSpacing } from './formField.constants';
export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    required?: boolean;
    description?: string;
    errorMessage?: string;
    children: ReactNode;
    spacing?: FormFieldSpacing;
}
declare const FormField: ({ className, label, required, description, errorMessage, children, spacing, ...props }: FormFieldProps) => import("react").JSX.Element;
export default FormField;
