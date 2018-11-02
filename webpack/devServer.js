const path = require('path');

module.exports = function () {
    return {
        devServer: {
            host: '0.0.0.0',
            port: 8080,
            compress: true
        }
    };
};
