// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         helvetica: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
//       },
//       backgroundImage: {
//         "custom-gradient": "linear-gradient(to right, #3b82f6, #8b5cf6)",
//       },
//     },
//   },
//   plugins: [],
// };

// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #3b82f6, #8b5cf6)",
      },
      borderColor: {
        purple: "#6b46c1",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
