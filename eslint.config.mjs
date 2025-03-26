// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt([
  eslintConfigPrettier,
  {
    ignores: [
      '.output',
      '.data',
      '.nuxt',
      '.nitro',
      '.cache',
      'dist',
      'node_modules',
      '*.log',
      '.env',
      '.env.*',
      '!.env.example',
      '.netlify',
      'public/**/*',
    ],
    rules: {
      'vue/script-setup-no-uses-vars': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
    },
  },
])
