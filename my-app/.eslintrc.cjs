// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: ['@gravity-ui/eslint-config', '@gravity-ui/eslint-config/import-order'],
    parserOptions: {
        ecmaVersion: 2020,
    },
};
