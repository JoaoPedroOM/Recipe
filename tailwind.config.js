/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Playwrite MX"],
        carne: ["Carme"],
        poppins: ["Poppins"],
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  },
};
