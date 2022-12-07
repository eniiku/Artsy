/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        clash_display: ['Clash Display', 'sans-serif'],
        baskervville: ['Baskervville', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        stix: ['STIX Two Text', 'serif'],
        bellefair: ['Bellefair', 'serif'],
      },
      colors: {
        dark_gray_clr: {
          200: '#333333',
          300: '#292929',
          500: '#272727',
          600: '#161616',
          700: '#292929',
        },
        light_gray_clr: {
          100: '#BCB7B7',
          200: '#F4F2F2',
          300: '#E2E2E2',
          400: '#AFB091',
          500: '#AEAEAE',
          600: '#D9D9D9',
          700: '#616161',
          900: '#999999',
        },
        blue_clr: {
          500: '#4693ED',
          700: '#3341C1',
        },
        red_clr: '#E31616',
      },
    },
  },
  plugins: [],
};
