module.exports = function() {
    return {
        module: {
            rules: [{
                test: /\.ts?$/,
                use: 'ts-loader',
            }]
        }
    };
};
