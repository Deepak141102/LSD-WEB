// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ... rest of your config
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
      opacity: ['dark'],
      gradientColorStops: ['dark'],
      filter: ['dark'],
      invert: ['dark'],
    },
  },
}