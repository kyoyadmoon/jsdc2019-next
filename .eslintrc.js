module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  root: true,
  parserOptions: {
    ecmaVersion: 8
  },
  rules: {
    "indent": ["error", 2],
    'react/jsx-filename-extension': 0,
    'no-extra-parens': 0,
    'react/jsx-no-bind': 0,
    'no-use-before-define': 0,
    quotes: 0,
    'babel/quotes': [1, 'single'],
    semi: ['ERROR', 'always'],
    'space-before-function-paren': [2, {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline'
    }],
    'object-curly-spacing': [
      'error', 'always', {
        arraysInObjects: true,
        objectsInObjects: true
      }],
    'array-bracket-spacing': [
      'error', 'always', {
        arraysInArrays: false,
        objectsInArrays: false
      }],
    'react/display-name': 0,
    'react/prop-types': 0,
  },
  plugins: [
    'babel',
  ],
  globals: {
    React: 'readonly',
  }
}