const path = require('path');

const config = {
    h5: {
        enableSourceMap: true,
        sourceMapType: 'cheap-module-eval-source-map',
        devServer: {
            host: '0.0.0.0',
            port: 10086,
            compress: true,
            overlay: true,
            disableHostCheck: true,
        },
    },
};

const devSetting = () => {
    config.h5.devServer.proxy = {
        '/blog': {
            target: 'https://blog.wanggboweb.site',
            changeOrigin: true,
            secure: false,
        },
    };
};

devSetting();

module.exports = {
    env: {
        NODE_ENV: '"development"',
    },
    defineConstants: {},
    mini: {},
    plugins: [path.resolve('config/plugins/complier.js')],
    ...config,
};
