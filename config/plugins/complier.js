const dayjs = require('dayjs');
const chalk = require('chalk');

export default (ctx, options) => {
    // plugin 主体
    ctx.onBuildFinish(() => {
        console.log(`编译更新时间: ${chalk.yellow.bold(dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'))}`);
        console.log('');
    });
};
