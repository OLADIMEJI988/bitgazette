import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--color-brand)",
          dark: "var(--color-brand-dark)",
          light: "var(--color-brand-light)",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          soft: "var(--color-ink-soft)",
          muted: "var(--color-ink-muted)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          alt: "var(--color-surface-alt)",
          border: "var(--color-border)",
        },
        accent: {
          green: "var(--color-accent-green)",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        sans: ["Manrope", "sans-serif"],
        news: ["Newsreader", "serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.2rem" }],
        sm: ["0.8125rem", { lineHeight: "1.25rem" }],
        base: ["0.9375rem", { lineHeight: "1.5rem" }],
        md: ["1.0625rem", { lineHeight: "1.6rem" }],
        lg: ["1.25rem", { lineHeight: "1.7rem" }],
        xl: ["1.5rem", { lineHeight: "1.9rem" }],
        "2xl": ["1.875rem", { lineHeight: "2.2rem" }],
        "3xl": ["2.25rem", { lineHeight: "2.6rem" }],
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "14px",
        xl: "20px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 15, 15, 0.06), 0 1px 8px rgba(15, 15, 15, 0.04)",
        hover: "0 8px 24px rgba(15, 15, 15, 0.10)",
      },
      maxWidth: {
        content: "1400px",
      },
    },
  },
  plugins: [typography],
};
