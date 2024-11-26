/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 3s ease-out',  // Existing fade-in animation
        'fade-in-left': 'fadeInLeft 2s ease-out',  // New fade-in-left animation
        'fade-in-right': 'fadeInRight 2s ease-out', // New fade-in-right animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },  // Start off-screen to the left
          '100%': { opacity: '1', transform: 'translateX(0)' },  // End at normal position
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },  // Start off-screen to the right
          '100%': { opacity: '1', transform: 'translateX(0)' },  // End at normal position
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
