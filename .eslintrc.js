module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', '@vue/standard'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
  },
  parser: 'vue-eslint-parser',
};
