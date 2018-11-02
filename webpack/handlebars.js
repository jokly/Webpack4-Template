module.exports = function() {
    return {
        module: {
            rules: [{
                test: /\.hbs$/,
                loader: "handlebars-loader",
                query: {
                    inlineRequires: '/assets/'
                }
            }]
        }
    }
};
