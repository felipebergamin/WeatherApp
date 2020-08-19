module.exports = {
  env: {
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
    'react-native',
    'react-hooks',
    'jsx-a11y',
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react-native/no-unused-styles': 2,
    'react-native/no-single-element-style-arrays': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
        json: 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
