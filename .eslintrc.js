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
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    rules: {
        "no-console": "off"
    }
}
