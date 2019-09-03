const path = require('path')
module.exports = {
  extends: 'airbnb',
  env: {
    mocha: true,
    node: true
  },
  parserOptions: {
  // Transpiled packages will want to override this to "module"
    sourceType: 'script'
  },
  rules: {
    strict: ["error", "global"],
    semi: 0,
    'comma-dangle': 0,
    'no-console': 0,
    'import/no-extraneous-dependencies': [
      'error',
      { packageDir: [path.join(__dirname)] }
    ],
    'import/no-dynamic-require': 0,
  }
}
