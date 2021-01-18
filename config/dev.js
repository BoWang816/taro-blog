const path = require('path');
const express = require('express');
const fs = require('fs');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));

const traversalDir = startPath => {
    const result = [];
    const files = fs.readdirSync(startPath);

    files.forEach(val => {
        const file = path.join(startPath, val);
        const stats = fs.statSync(file);

        if (stats.isDirectory()) {
            result.push(...traversalDir(file));
        } else if (stats.isFile()) {
            result.push(file);
        }
    });

    return result;
};

const log = (msg, color = '32m') => {
    console.log('-'.repeat(msg.length + 2));
    console.log(`\x1b[40;${color} ${msg} \x1b[0m`);
    console.log('-'.repeat(msg.length + 2));
};

const mockServer = (folder, app) => {
    console.log(folder);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    traversalDir(folder).forEach(dir => {
        console.log(dir);
        return require(dir)(app);
    });
    log('Mock service started successfully ✔');
};

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
    if (argv.run === 'mock') {
        config.h5.devServer.before = app => {
            mockServer(path.resolve(__dirname, '../mock'), app);
        };
        return;
    }
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
