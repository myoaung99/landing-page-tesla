/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "large-model-3": "url('/src/assets/images/home/Model-3.jpg')",
        "small-model-3": "url('/src/assets/images/home/mobile/Model-3.jpg')",
        "large-model-y": "url('/src/assets/images/home/Model-Y.jpg')",
        "small-model-y": "url('/src/assets/images/home/mobile/Model-Y.jpg')",
        "large-model-s": "url('/src/assets/images/home/Model-S.jpg')",
        "small-model-s": "url('/src/assets/images/home/mobile/Model-S.jpg')",
        "large-model-x": "url('/src/assets/images/home/Model-X.jpg')",
        "small-model-x": "url('/src/assets/images/home/mobile/Model-X.jpg')",
        "large-solar-panels": "url('/src/assets/images/home/SolarPanels.jpg')",
        "small-solar-panels":
          "url('/src/assets/images/home/mobile/SolarPanels.jpg')",
        "large-solar-roof": "url('/src/assets/images/home/SR-Design.jpg')",
        "small-solar-roof":
          "url('/src/assets/images/home/mobile/SolarRoof.jpg')",
        "large-accessories": "url('/src/assets/images/home/Accessories.jpg')",
        "small-accessories":
          "url('/src/assets/images/home/mobile/Accessories.jpg')",
        "large-main-model-s":
          "url('/src/assets/images/model-s/Model-S-Main.jpg')",
        "small-main-model-s":
          "url('/src/assets/images/model-s/mobile/Model-S-Main-Mobile.jpg')",
      },
    },
  },
  plugins: [],
};
