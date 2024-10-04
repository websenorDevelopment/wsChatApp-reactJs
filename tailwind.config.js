/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#2a2f32",
        "primary-dark": "#131c21",
        "primary-green": "#056162",
      },
      backgroundImage: {
        "chat-bg": "url('assets/images/chat-background.png')",
      },
    },
  },
  plugins: [],
};
