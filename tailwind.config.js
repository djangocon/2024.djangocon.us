/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md,liquid}"],
  theme: {
    extend: {
      backgroundImage: {
        'lines': "url('/assets/img/theme/hero-bg.svg')",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'red': '#DB433B',
        'orange': '#F39745',
        'blue': '#3D9CFB',
        'light-blue': '#5FBFFA',
        'purple': '#B989C9',
        'green': '#64A03D',
        'yellow': '#E7BB43',

        'social-facebook': '#0866ff',
        'social-linkedin': '#2d64bc',
        'social-twitter': '#4a99e9',
        'social-github': '#7041c0',
        'social-mastodon': '#6364FF',
      },
      fontSize: {
        '5xl': ['3rem', 1.1]
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography')
  ],
}
