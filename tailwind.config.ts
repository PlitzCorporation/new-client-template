import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "plitz-bgs": "#1a1a1a",
      "plitz-body": "#dbdbdb",
      "plitz-light-gray": "#efefef",
      "plitz-green": "#00ff62",
      "plitz-dark": "#434343",
      "plitz-blue": "#0b093a",
      white: "#ffffff",
    },
    fontFamily: {
      "plitz-font-main": "var(--primary-font)",
      "plitz-font-sec": "var(--secodary-font)",
    },
    borderRadius: {
      plitzsm: "1.25rem",
      plitzmd: "1.875rem",
      plitzlg: "2.1875rem",
      full: "50%",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        bounce: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
