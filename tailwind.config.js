/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  './src/**/*.{js,jsx,ts,tsx}', // Includes all JS/TS files in src and subdirectories
    './pages/**/*.{js,jsx,ts,tsx}', // Includes all JS/TS files in pages directory
    './src/components/*.{js,jsx,ts,tsx}', // Includes all JS/TS files in components directory
    './src/styles/*.css',
],
theme: {
  extend: {},
},
plugins: [],
};