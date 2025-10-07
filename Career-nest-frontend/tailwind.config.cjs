/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    // Ensure these utilities are always generated in the CSS output
    "bg-black",
    "h-28",
    "text-white",
    "px-6",
    "flex",
    "items-center",
    "justify-between",
    "gap-4",
    "w-full"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
