/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "large-model-3": "url('/src/assets/images/Model-3.jpg')",
        "small-model-3": "url('/src/assets/images/mobile/Model-3.jpg')",
      },
    },
  },
  plugins: [],
};
