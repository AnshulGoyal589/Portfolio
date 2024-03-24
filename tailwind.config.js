/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blueTheme': '#212428',
      'purple': '#7e5bef',
      'black': '#000000',
      'red': '#f9004d',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#545961',
      'gray': '#c4cfde',
      'gray-light': '#d3dce6',
      'white':'#ffffff'
    },
    fontSize: {
      sm: '0.813rem',
      nor:'0.9rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '2.8rem',
      '4xl': '4rem',
      '5xl': '3.052rem',
      '6xl': '1.35rem',
      '7xl':'1.8rem',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      dropShadow: {
        '3xl': '5px 10px 6px rgba(0, 0, 0, 0.5)',
        '4xl': [
            '0 -4px 10px rgba(255, 255, 255, 0.1)', // White shadow at the top
            '10px 0 6px rgba(0, 0, 0, 0.3)',        // Black shadow at the bottom
            '-4px 0 10px rgba(255, 255, 255, 0.05)', // White shadow on the left
             '5px 10px 6px rgba(0, 0, 0, 0.6)',  
          ]
      },
      height: {
        '128': '33rem',
      }
    }
  },
  plugins: [require("daisyui")],
}