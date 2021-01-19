module.exports = {
    extends: ['taro/react', 'airbnb', 'prettier', 'prettier/react'],
    plugins: ['prettier'],
    settings: {
        'import/resolver': {
            alias: [
                ['@utils', './src/utils'],
                ['@pages', './src/pages'],
                ['@common', './src/common'],
                ['@assets', './src/assets'],
                ['@components', './src/components'],
                ['@constants', './src/constants'],
            ],
        },
    },
    rules: {
        'react/static-property-placement': ['error', 'static public field'],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'react/prefer-stateless-function': 'off',
        'react/destructuring-assignment': 0,
        'react/prop-types': 0,
        'no-underscore-dangle': 0,
        'import/imports-first': ['error', 'absolute-first'],
        'import/newline-after-import': 'error',
        'react/forbid-prop-types': 'off',
        'react/no-danger': 'off',
        'no-console': 'off',
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'template-curly-spacing': ['error', 'never'],
        'object-curly-spacing': [
            'error',
            'always',
            {
                objectsInObjects: true,
                arraysInObjects: true,
            },
        ],
        'jsx-a11y/label-has-for': 0,
        quotes: ['error', 'single'],
        // jsx 中属性全部使用双引
        'jsx-quotes': ['error', 'prefer-double'],
        'space-infix-ops': ['error'],
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'react/sort-comp': 'off',
        'import/no-cycle': 'off',
        'react/no-array-index-key': 'off',
    },
    parser: 'babel-eslint',
};
