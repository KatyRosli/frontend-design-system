# KatyRosli Design System

A reusable React component library built with **React**, **TypeScript**, **Tailwind CSS**, and **Storybook**.

Designed to provide accessible, consistent, and scalable UI components for modern web applications.

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
npm run build
```

Output:

```
dist/
├── index.js
└── index.d.ts
```

---

# Project Structure

```
src
├── components
│   ├── atoms
│   ├── molecules
│   └── organisms
│
├── styles
│   └── globals.css
│
├── lib
│   └── utils.ts
│
└── index.ts

.storybook
├── main.ts
└── preview.tsx
```

---

# Component Guidelines

When creating new components:

## 1. Keep components composable

Prefer:

```tsx
<FormField>
  <Input />
</FormField>
```

instead of:

```tsx
<InputWithLabel />
```

Small components should combine together.

---

## 2. Use variants instead of duplicated components

Example:

```tsx
<Button variant="primary">
  Save
</Button>

<Button variant="secondary">
  Cancel
</Button>
```

Avoid:

```
PrimaryButton.tsx
SecondaryButton.tsx
```

---

## 3. Keep styling inside components

Components should own their styles:

```
Button
├── button.tsx
├── button.constants.ts
└── button.stories.tsx
```

---

# Tech Stack

| Technology | Purpose |
|---|---|
| React | UI framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Class Variance Authority | Component variants |
| Storybook | Documentation |
| Vitest | Testing |
| Vite | Package bundling |

---

# License

MIT License

You are free to use, modify, and distribute this software.

---

# Author

Created by Katy Rosli

GitHub:
https://github.com/KatyRosli

