import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        g2g: {
          primary: "#00cc77",
          dark: "#0b1b14"
        }
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
export default config
