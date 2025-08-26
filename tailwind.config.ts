import type { Config } from 'tailwindcss'
const config: Config = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { g2g: { primary: "#22b8a5", dark: "#0e1212"} },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" }
    }
  },
  plugins: [],
}
export default config
