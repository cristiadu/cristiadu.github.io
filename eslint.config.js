import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'

const sharedRules = {
  'semi': ['error', 'never'],
  'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
  'no-console': ['warn', { 'allow': ['warn', 'error'] }],
  'prefer-const': 'error',
  'no-var': 'error',
  'eqeqeq': ['error', 'always'],
  'quotes': ['error', 'single', { 'avoidEscape': true }],
  'indent': ['error', 2, { 'SwitchCase': 1 }],
  'comma-dangle': ['error', 'never'],
  'object-curly-spacing': ['error', 'always'],
  'array-bracket-spacing': ['error', 'never'],
  'arrow-spacing': ['error', { 'before': true, 'after': true }],
  'keyword-spacing': ['error', { 'before': true, 'after': true }],
  'space-before-blocks': ['error', 'always'],
  'space-infix-ops': 'error'
}

export default [
  {
    ignores: [
      'coverage/**',
      'dist/**',
      'node_modules/**',
      'playwright-report/**',
      'public/**',
      'test-results/**'
    ]
  },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      ...eslintReact.configs.recommended.plugins
    },
    settings: {
      ...eslintReact.configs.recommended.settings
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...eslintReact.configs.recommended.rules,
      ...sharedRules,
      'no-restricted-imports': ['error', {
        patterns: [
          {
            group: ['../*'],
            message: 'Use @/ alias instead of relative imports (e.g., @/components, @/hooks)'
          }
        ]
      }]
    }
  },
  {
    files: ['*.js', '*.cjs', '*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...sharedRules
    }
  }
]
