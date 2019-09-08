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
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    "indent": ["error", 2],
    'react/jsx-filename-extension': 0,
    'no-extra-parens': 0,
    'react/jsx-no-bind': 0,
    'no-use-before-define': 0,
    'babel/quotes': [2, 'single'],
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

    // react
    'react/display-name': 0,
    'react/prop-types': 0,
    'jsx-quotes': [2, "prefer-single"],
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-tag-spacing': [2, {
      'closingSlash': 'never',
      'beforeSelfClosing': 'never',
      'afterOpening': 'never',
      'beforeClosing': 'never'
    }]
  },
  plugins: [
    'babel',
  ],
  globals: {
    React: 'readonly',
  }
}