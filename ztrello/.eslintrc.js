module.exports = {
  "extends": ["standard", "standard-react"],
  "parser": "babel-eslint",
  "rules": {
    "no-console": 0,
    "semi": ["error", "always"],
    "react/jsx-indent": ["enabled", 2],
    "space-before-function-paren": ["error", "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "func-names": ["error", "as-needed"],
    "quotes": ["error", "double"],
    "quotes": ["error", "double", { "avoidEscape": true }],
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "react/prefer-stateless-function": false,
    "react/destructuring-assignment": ["enabled", "never"],
    "react/prop-types": [
      "enabled",
      { "ignore": "ignore", "customValidators": "customValidator" }
    ]
  },
  "env": {
    "browser": true,
    "node": true
  }

};