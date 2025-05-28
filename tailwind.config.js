/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // This enables class-based dark mode
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#3B82F6', // blue-500
            dark: '#2563EB', // blue-600 for dark mode
          },
        },
      },
    },
    plugins: [],
  }