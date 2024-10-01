/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle at top, rgba(241, 210, 70, 0.98), rgba(250, 176, 103, 0.87))',
        'bg_pattern_dark': "url('./Src/assets/bg-pattern-dark.png')", // Replace with your actual image path
      },
    },
  },
  plugins: [],
}

