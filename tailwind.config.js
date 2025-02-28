module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure it scans all files
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 12s linear infinite',
        },
        keyframes: {
          spin: {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          }
        }
      },
    },
    plugins: [],
  }