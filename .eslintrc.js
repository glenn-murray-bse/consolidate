module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:all"
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      2,
      "never"
    ],
    "quote-props": [
      "error",
      "consistent-as-needed"
    ],
    "object-curly-newline": [
      "error", {
        "ObjectExpression": "always",
        "ObjectPattern": {
          "multiline": true
        }
      }
    ],
    "padded-blocks": [
      "error", {
        "blocks": "never",
        "classes": "never",
        "switches": "never"
      }
    ]
  },
  "globals": {
    "riot": true,
    "describe": true,
    "it": true,
    "beforeEach": true,
    "afterEach": true,
    "expect": true
  },
  "plugins": ["riot"]
}