module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    "parserOptions": {
        parser: 'babel-eslint',
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    rules: {
        "no-console": "off"
    }
}
