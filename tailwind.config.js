/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "large-model-3": "url('/src/assets/images/home/Model-3.webp')",
        "small-model-3": "url('/src/assets/images/home/mobile/Model-3.webp')",
        "large-model-y": "url('/src/assets/images/home/Model-Y.webp')",
        "small-model-y": "url('/src/assets/images/home/mobile/Model-Y.webp')",
        "large-model-s": "url('/src/assets/images/home/Model-S.webp')",
        "small-model-s": "url('/src/assets/images/home/mobile/Model-S.webp')",
        "large-model-x": "url('/src/assets/images/home/Model-X.webp')",
        "small-model-x": "url('/src/assets/images/home/mobile/Model-X.webp')",
        "large-solar-panels": "url('/src/assets/images/home/SolarPanels.webp')",
        "small-solar-panels":
          "url('/src/assets/images/home/mobile/SolarPanels.webp')",
        "large-solar-roof": "url('/src/assets/images/home/SR-Design.webp')",
        "small-solar-roof":
          "url('/src/assets/images/home/mobile/SolarRoof.webp')",
        "large-accessories": "url('/src/assets/images/home/Accessories.webp')",
        "small-accessories":
          "url('/src/assets/images/home/mobile/Accessories.webp')",

        "small-dual-engine":
          "url('/src/assets/images/model-s/mobile/Model-S-Performance-Dual-Motor-Mobile.webp')",
        "large-dual-engine":
          "url('/src/assets/images/model-s/model-s-performance-dual-motor-desktop.webp')",
        "small-tri-engine":
          "url('/src/assets/images/model-s/mobile/Model-S-Performance-Tri-Motor-Mobile.webp')",
        "large-tri-engine":
          "url('/src/assets/images/model-s/model-s-performance-tri-motor-desktop.webp')",
      },
    },
  },
  plugins: [],
};
