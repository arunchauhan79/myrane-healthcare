/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: '#fc7500',
        secondary: '#ed7207',
        lightOrange: '#ffa95b',
        accent: '#ffdd00',
        brownColor: '#332013',
        white: '#fff',
        dark: '#1a1a1a',
        darkest: '#000',
      },
      fontSize: {
        // Custom font sizes
        'xxs': '0.625rem',  // 10px
        '2xs': '0.75rem',   // 12px
        'md': '1.125rem',   // 18px
        '2xl': '1.75rem',   // 28px
        '4xl': ['2rem', { lineHeight: "2.5rem" }],    // 32px
      },
      // lineHeight: {
      //   // Custom line heights
      //   'extra-loose': '2.5',
      //   '12': '3rem',
      // },
      // letterSpacing: {
      //   // Custom letter spacing
      //   wider: '0.05em',
      //   widest: '0.1em',
      // },
      // fontWeight: {
      //   // Custom font weights
      //   extraBold: '800',
      //   hairline: '100',
      // },
      textColor: {
        // Custom text colors
        primary: '#fc7500',
        secondary: '#ed7207',
        muted: '#9ca3af',
      },
    },
  },
  plugins: [],
}
