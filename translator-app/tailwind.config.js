/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous", "sans-serif"],
        russoOne: ["Russo One", "sans-serif"],
        notoSansJp: ["Noto Sans JP", "sans-serif"],
        shojumaru: ["shojumaru", "system-ui"],
      },
      translate: ["active"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "::-webkit-scrollbar": {
            display: "none", // Hide scrollbar for Webkit browsers (Chrome, Safari)
          },
          "-ms-overflow-style": "none", // For Internet Explorer
          "scrollbar-width": "none", // For Firefox
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
