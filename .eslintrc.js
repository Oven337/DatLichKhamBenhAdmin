module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'prettier'
    ],
    plugins: ['prettier'],
    rules: {
        "plugin:vue/vue3-essential", 
        "plugin:vue/vue3-strongly-recommended",
        "plugin:vue/vue3-recommended"
    },
    globals: {
        _: true,
    },
}