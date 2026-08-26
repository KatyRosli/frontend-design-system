import { Moon, Sun } from "lucide-react";

import Button from "@/components/atoms/button";
import Icon from "@/foundations/icon";

export type Appearance = "light" | "dark";

export interface AppearanceToggleProps {
  appearance: Appearance;
  onAppearanceChange: (appearance: Appearance) => void;
  size?: "sm" | "md" | "lg";
}

const AppearanceToggle = ({
  appearance,
  onAppearanceChange,
  size = "sm",
}: AppearanceToggleProps) => {
  const nextAppearance =
    appearance === "dark" ? "light" : "dark";

  return (
    <Button
      variant="outline"
      size="sm"
      iconOnly
      icon={
        <Icon
          icon={appearance === "dark" ? Sun : Moon}
          size="sm"
        />
      }
      onClick={() =>
        onAppearanceChange(nextAppearance)
      }
      aria-label={
        appearance === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    />
  );
};

export default AppearanceToggle;
