/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.jsx',
    './src/pages/*.tsx',
    './src/pages/*.ts',
    './src/components/**/*.ts',
    './src/components/**/*.jsx',
    './src/components/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: 'url("../src/assets/bg_home.svg")'
      },
      fontFamily: {
        Roboto: 'Roboto, sans-serif',
        russoOne: 'Russo One, sans-serif'
      }
    }
  },
  plugins: []
}
