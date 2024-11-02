import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        darkBlue: "#2B3945", //Dark Mode Elements
        veryDarkBlue: "#202C37", //Dark Mode Background
        veryDarkBlue2: "#111517", //Light Mode Text
        darkGray: "#858585", //Light Mode Input
        veryLightGray: "#FAFAFA", //Light Mode Background
         // white: "FFFFFF" Dark Mode Text & Light Mode Elements
      },
    },
  },
  plugins: [],
};
export default config;
