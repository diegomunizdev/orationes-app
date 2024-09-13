// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier', 'plugin:react-hooks/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        caughtErrors: 'none',
      },
    ],
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    'no-empty-pattern': 'error',
  },
};
