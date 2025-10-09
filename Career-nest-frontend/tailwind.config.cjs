/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    // Ensure these utilities are always generated in the CSS output
    // "bg-black",
    // "h-28",
    // "text-white",
    // "px-6",
    // "flex",
    // "items-center",
    // "justify-between",
    // "gap-4",

    // "w-full"
  ],
  theme: {
    extend: {
      colors:{
        'mine-shaft': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#2d2d2d',
      },
        'cerise': {
        '50': '#fdf2f9',
        '100': '#fbe8f4',
        '200': '#fad0eb',
        '300': '#f7aada',
        '400': '#f076c0',
        '500': '#e74da5',
        '600': '#d93e8f',
        '700': '#b91d6a',
        '800': '#991b58',
        '900': '#801b4c',
        '950': '#4e0929',
      },
    }
    },
  },
  plugins: [],
};