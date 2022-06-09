module.exports = {
  plugins: ['jest'],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'comma-dangle': 0,
  }
}
