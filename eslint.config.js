import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'

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
    ignores: ['dist/**', 'node_modules/**', 'public/**']
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
      react: pluginReact,
      'react-hooks': pluginReactHooks
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...sharedRules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
      'react/prop-types': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
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
