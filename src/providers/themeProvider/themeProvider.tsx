import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("bina-theme");

    const initialTheme: Theme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : window.matchMedia(
            "(prefers-color-scheme: dark)",
          ).matches
          ? "dark"
          : "light";

    setThemeState(initialTheme);

    document.documentElement.classList.toggle(
      "dark",
      initialTheme === "dark",
    );
  }, []);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);

    localStorage.setItem("bina-theme", nextTheme);

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark",
    );
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within a ThemeProvider",
    );
  }

  return context;
};

export default ThemeProvider;