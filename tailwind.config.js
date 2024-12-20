/** @type {import('tailwindcss').Config} */


module.exports = {
  // Specify where Tailwind should look for class names to purge unused styles
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add any other file extensions you use for components
  ],

  theme: {
    extend: {
      colors: {
        'primary': '#1D4ED8', // Example custom color for primary (change to your desired color)
        'secondary': '#6EE7B7', // Example secondary color
      },
      fontFamily: {
        // Example of custom fonts
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      spacing: {
        // Example of custom spacing (adjust to fit your needs)
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        // Define the custom scrolling animation here
        scrollLeft: 'scrollLeft 20s linear infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
        'slide-left': 'slideLeft 4s ease-out forwards',
        'slide-right': 'slideRight 4s ease-out forwards',
      },
      keyframes: {
        // Define the custom animation's keyframes
        scrollLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      transform: ['hover', 'focus'],
    },
  },

  plugins: [
    // Add plugins if needed, for example for forms, typography, etc.
    // Example:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
