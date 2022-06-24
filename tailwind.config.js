/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.erb"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    "@tailwindcss/forms",
    "@tailwindcss/typography"
  ],
}
