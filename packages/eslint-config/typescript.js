module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: false,
    node: true,
    jest: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'class-methods-use-this': 'off',
    'max-len': ['error', { code: 120, tabWidth: 2 }],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      2,
      {
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
  },
};
