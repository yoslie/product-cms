import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lora: ['Lora', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem',
      },
      backgroundImage: {
        'pattern-content': "url('/images/pattern-content.svg')",
      },
    },
  },
  plugins: [],
}
