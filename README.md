# KatyRosli Design System

A reusable React component library built with **React**, **TypeScript**, **Tailwind CSS**, and **Storybook**.

Designed to provide accessible, consistent, and scalable UI components for modern web applications.

<img width="1467" height="681" alt="Screenshot 2026-07-25 at 18 12 46" src="https://github.com/user-attachments/assets/439d2ca9-f6f1-4d28-8e3a-52cfc18185b6" />


## ✨ Features

- ⚛️ React + TypeScript
- 🎨 Tailwind CSS based styling
- ♿ Accessible components
- 📚 Storybook documentation
- 🧩 Atomic Design architecture
- 🎯 Type-safe component APIs
- 🧪 Component testing support

---

# Installation

Install the package using npm:

```bash
npm install @katyrosli/design-system
```

or using pnpm:

```bash
pnpm add @katyrosli/design-system
```

or yarn:

```bash
yarn add @katyrosli/design-system
```

---

# Setup

Import the design system styles once in your application:

```tsx
import "@katyrosli/design-system/styles.css";
```

Then import components:

```tsx
import {
  Button,
  Input,
  Typography,
} from "@katyrosli/design-system";
```

Example:

```tsx
export default function App() {
  return (
    <div>
      <Typography variant="h1">
        Welcome
      </Typography>

      <Button>
        Get Started
      </Button>
    </div>
  );
}
```

---

# Components

## Atoms

Small reusable building blocks.

| Component | Description |
|---|---|
| Button | Primary user actions |
| Input | Text input control |
| Typography | Consistent text hierarchy |
| Spinner | Loading indicator |

---

## Molecules

Components combining multiple atoms.

| Component | Description |
|---|---|
| FormField | Label, input, helper text, validation states |
| PasswordField | Password input with visibility toggle |
| EmptyState | Empty content placeholder |

---

## Organisms

Complex UI sections composed from molecules and atoms.

| Component | Description |
|---|---|
| LoginForm | Complete authentication form |

---

# Design Principles

This design system follows:

## Atomic Design

Components are organised into:

```
components
├── atoms
│   ├── Button
│   ├── Input
│   └── Typography
│
├── molecules
│   ├── FormField
│   └── PasswordField
│
└── organisms
    └── LoginForm
```

---

## Accessibility First

Components aim to follow:

- Semantic HTML
- Keyboard navigation
- Accessible states
- ARIA best practices

---

# Development

Clone the repository:

```bash
git clone https://github.com/KatyRosli/frontend-design-system.git
```

Install dependencies:

```bash
npm install
```

---

## Run Storybook

Start local component documentation:

```bash
npm run storybook
```

Open:

```
http://localhost:6006
```

---

## Build Storybook

Generate production documentation:

```bash
npm run build-storybook
```

---

## Build Package

Create the npm package:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
