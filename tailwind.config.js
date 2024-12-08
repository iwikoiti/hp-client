/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-bg": "#FDF2CA",
        "custom-input-bg": "#FFEA9C",
        "custom-button-bg": "#F4D345",
      },
      borderColor: {
        "custom-input-border": "#E6D28C",
      },
      placeholderColor: {
        "custom-placeholder": "#B2A36D",
      },
    },
  },
  plugins: [],
};
