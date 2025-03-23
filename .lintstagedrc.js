module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
  '*.{json,md}': ['prettier --write'],
  '*.config.{js,ts}': ['eslint --config .eslintrc.config.js --fix', 'prettier --write'],
};
