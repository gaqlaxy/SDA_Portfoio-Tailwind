/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/Public/Images/data.jpeg')",
      },
    },
  },
  plugins: [],
};
