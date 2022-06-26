/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "large-model-3": "url('/src/assets/images/Model-3.jpg')",
        "small-model-3": "url('/src/assets/images/mobile/Model-3.jpg')",
        "large-model-y": "url('/src/assets/images/Model-Y.jpg')",
        "small-model-y": "url('/src/assets/images/mobile/Model-Y.jpg')",
        "large-model-s": "url('/src/assets/images/Model-S.jpg')",
        "small-model-s": "url('/src/assets/images/mobile/Model-S.jpg')",
        "large-model-x": "url('/src/assets/images/Model-X.jpg')",
        "small-model-x": "url('/src/assets/images/mobile/Model-X.jpg')",
        "large-solar-panels": "url('/src/assets/images/SolarPanels.jpg')",
        "small-solar-panels":
          "url('/src/assets/images/mobile/SolarPanels.jpg')",
        "large-solar-roof": "url('/src/assets/images/SR-Design.jpg')",
        "small-solar-roof": "url('/src/assets/images/mobile/SolarRoof.jpg')",
        "large-accessories": "url('/src/assets/images/Accessories.jpg')",
        "small-accessories": "url('/src/assets/images/mobile/Accessories.jpg')",
      },
    },
  },
  plugins: [],
};
