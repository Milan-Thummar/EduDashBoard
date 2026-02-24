/** @type {import('tailwindcss').Config} */
import colors from "./src/styles/colors";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "Inter",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.1rem" }],
        sm: ["0.875rem", { lineHeight: "1.35rem" }],
        base: ["1rem", { lineHeight: "1.55rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.85rem" }],
        "2xl": ["1.5rem", { lineHeight: "2.1rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.35rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      },

      borderRadius: {
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },

      boxShadow: {
        xs: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px",
        sm: "0 1px 2px rgba(15, 23, 42, 0.06)",
        md: "0 6px 16px rgba(15, 23, 42, 0.08)",
        lg: "0 12px 28px rgba(15, 23, 42, 0.12)",
      },

      colors: {
        // raw palette
        primary: colors.primary,
        slate: colors.slate,
        success: colors.success,
        warning: colors.warning,

        // Tailwind reserved
        white: colors.white,
        black: colors.black,
        transparent: colors.transparent,
        current: colors.current,
        inherit: colors.inherit,

        // semantic tokens
        "color-background-default": colors.white,
        "color-background-page": colors.slate[50],
        "color-background-muted": colors.slate[50],
        "color-background-card": colors.white,
        "color-background-button": colors.primary[600],

        "color-text-primary": colors.slate[500],
        "color-text-secondary": colors.slate[300],
        "color-text-muted": colors.slate[200],
        "color-text-inverse": colors.white,

        "color-nav-item": colors.slate[500],
        "color-nav-item-hover": colors.slate[400],
        "color-nav-item-active": colors.primary[500],

        "color-border-default": colors.slate[50],
        "color-border-subtle": colors.slate[100],
        "color-border-strong": colors.slate[200],

        "color-action-primary": colors.primary[500],
        "color-action-primary-hover": colors.primary[600],
        "color-action-primary-subtle": colors.primary[50],

        "color-progress-inprogress": colors.primary,
        "color-progress-completed": colors.success,
        "color-progress-notstarted": colors.warning,

        "color-success": colors.success.DEFAULT,
        "color-warning": colors.warning.DEFAULT,

        "color-focus-ring": colors.primary[200],
      },
    },
  },
  plugins: [],
};
