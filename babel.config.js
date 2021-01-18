// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
    presets: [
        ['@babel/preset-env'],
        [
            'taro',
            {
                framework: 'react',
                modules: false,
                ts: false,
                targets: {
                    ios: 7,
                    android: 4,
                    chrome: '42',
                },
            },
        ],
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-arrow-functions',
        '@babel/plugin-proposal-object-rest-spread',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-class-properties',
    ],
};
