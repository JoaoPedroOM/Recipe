/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Playwrite MX"],
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  },
};
