import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#d529a6",
        secondary: "#d36fa7",
        grey400: "#99A2A5",
        grey500: "#242B33",

        grey300: "#CCD1D2",
        grey200: "#EBEEEF",
        white: "#FDFDFD",
        black: "#00171F",
      },
      padding: {
        x: "30px",
        lg: "150px",
        md: "100px",
      },
      fontSize: {
        sm: "14px",
        lg: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
