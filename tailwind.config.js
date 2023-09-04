/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": { transform: "translateY(30px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        floating:
          "float 3s cubic-bezier(0.41, 0.15, 0.64, 0.86) infinite alternate",
      },
    },
  },
  plugins: [],
};
