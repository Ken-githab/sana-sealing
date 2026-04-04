import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF9F6",
        sakura: "#FADADD",
        "dusty-pink": "#DCAEAF",
        "deep-pink": "#C89496",
        "text-main": "#3D3535",
        "text-sub": "#7A6A6A",
      },
      fontFamily: {
        serif: ["Noto Serif JP", "serif"],
      },
      keyframes: {
        "float-up": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float-up 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
