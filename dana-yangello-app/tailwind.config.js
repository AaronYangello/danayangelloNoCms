/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        oswald: ['"Oswald"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors:{
        'dark-primary': '#1f1f1f',
        'dark-gray': '#424242',
        'light-gray': '#f4f4f4'
      }
    },
  },
  plugins: [],
}

