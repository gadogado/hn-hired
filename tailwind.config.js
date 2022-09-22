/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        cardo: ["cardo", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      dropShadow: {
        btn: "0px 1px 1px rgba(0, 0, 0, 0.12)",
        card: "0px 2px 2px rgba(0, 0, 0, 0.1)"
      },
      boxShadow: {
        container: "0px 1px 1px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        /* Overrides for raw html within ycombinator comments */
        code: {
          display: "block",
          overflowY: "scroll",
          fontSize: theme("fontSize.sm"),
        },
        a: {
          textOverflow: "ellipsis",
          overflow: "hidden",
          textDecoration: "underline"
        },
        p: {
          padding: `${theme("spacing.2")} 0`,
          wordBreak: 'break-word'
        },
        mark: {
          background: theme("colors.yellow.200")
        }
      });
    }),
  ],
};
