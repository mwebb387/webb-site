/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: ['corporate']
  }
}

