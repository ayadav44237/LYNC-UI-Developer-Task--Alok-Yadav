/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-grid': ` 
          repeating-linear-gradient(
            to right,
            rgba(255, 255, 255, 0.1) 0px,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px,
            transparent 30px
          ),
          repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.1) 0px,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px,
            transparent 30px
          ),
          linear-gradient(to right, #4c1d95, #6b46c1)
        `,
      },
      boxShadow: {
        'outer-dark': '0px 40px 80px rgba(0, 0, 0, 0.9)', // Outer shadow only (dark)
        'inner-dark': 'inset 0px 40px 80px rgba(0, 0, 0, 0.7)', // Inner shadow only (dark)
        'both-dark': '0px 40px 80px rgba(0, 0, 0, 0.9), inset 0px 40px 80px rgba(0, 0, 0, 0.7)', // Both outer and inner shadows (dark)
        'outer-2xl': '0px 20px 40px rgba(0, 0, 0, 0.8)', // Outer shadow 2xl (dark)
        'inner-2xl': 'inset 0px 20px 40px rgba(0, 0, 0, 0.5)', // Inner shadow 2xl (dark)
        'both-2xl': '0px 20px 40px rgba(0, 0, 0, 0.8), inset 0px 20px 40px rgba(0, 0, 0, 0.5)', // Both outer and inner shadows 2xl (dark)
        'outer-3xl': '0px 30px 60px rgba(0, 0, 0, 0.85)', // Outer shadow 3xl (dark)
        'inner-3xl': 'inset 0px 30px 60px rgba(0, 0, 0, 0.6)', // Inner shadow 3xl (dark)
        'both-4xl': '0px 40px 80px rgba(76, 29, 149, 0.5), 0px 10px 15px rgba(107, 70, 193, 0.5)',
        'both-5xl': '0px 40px 80px rgba(76, 29, 149, 0.8), 0px 10px 15px rgba(107, 70, 193, 0.8)', // Darker shadows
        'both-6xl': '0px 40px 80px rgba(76, 29, 149, 1), 0px 10px 15px rgba(107, 70, 193, 1)',     // Even darker
        'both-3xl': '0px 40px 80px rgba(0, 0, 0, 0.8), inset 0px 20px 40px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
