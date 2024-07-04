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
      boxShadow: {
        'button': '0 0 0 3px #fdb75d, 0 0 0 4px #ffa411',
        'inputSd': '0 0 0 3px #fb1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
