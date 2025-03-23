module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'commonjs',
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'off',
  },
};
