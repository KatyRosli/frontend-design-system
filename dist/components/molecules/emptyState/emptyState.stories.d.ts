import { StoryObj } from '@storybook/nextjs-vite';
import { default as EmptyState } from './emptyState';
/**
 * Reusable EmptyState molecule that displays
 * empty content situations with optional icons,
 * descriptions, and actions.
 *
 * It is commonly used for empty lists,
 * dashboards, search results, and notifications.
 */
declare const meta: {
    title: string;
    component: ({ className, icon, title, description, action, size, ...props }: import('./emptyState').EmptyStateProps) => import("react").JSX.Element;
    tags: string[];
    args: {
        title: string;
        description: string;
        size: "md";
    };
    argTypes: {
        size: {
            control: "radio";
            options: readonly ["sm", "md", "lg"];
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof EmptyState>;
export declare const Playground: Story;
export declare const Default: Story;
export declare const NoSearchResults: Story;
export declare const NoNotifications: Story;
export declare const Small: Story;
export declare const Large: Story;
