/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.ts',
    './resources/**/*.tsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Source Sans 3"', 'sans-serif'],
        'sourceSans': ['"Source Sans 3"', 'sans-serif'],
      },
      colors: {
        'brand': '#00A596',
        'primary': '#1d4ed8',
      },
      textColor: {
        'success': '#16a34a',
        'error': '#db2626',
        'warn': '#ea580c',
        'base': '#4b5563',
      },
      backgroundColor: {
        'success': '#66bb6a',
      },
      animation: {
        rotation: 'rotation 1s linear infinite',
      },
      keyframes: {
        rotation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },

  plugins: [],
};
