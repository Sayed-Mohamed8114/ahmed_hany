/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffdf0',
          100: '#fef9d0',
          200: '#fdf0a0',
          300: '#fce270',
          400: '#f8c93a',
          500: '#d4a017',
          600: '#b8860b',
          700: '#9a6f08',
          800: '#7a5506',
          900: '#5c3f04',
        },
        obsidian: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#bdbdbd',
          300: '#9e9e9e',
          400: '#757575',
          500: '#424242',
          600: '#2c2c2c',
          700: '#1e1e1e',
          800: '#141414',
          900: '#0a0a0a',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #d4a017 0%, #f8c93a 50%, #b8860b 100%)',
        'dark-gradient':
          'linear-gradient(135deg, #0a0a0a 0%, #1e1e1e 100%)',
      }
    }
  },
  plugins: [],
}