/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bcdaff",
          300: "#8ec2ff",
          400: "#599fff",
          500: "#3478f6",
          600: "#1f5be0",
          700: "#1a48b8",
          800: "#1b3e93",
          900: "#1c3775",
        },
      },
    },
  },
  plugins: [],
};
