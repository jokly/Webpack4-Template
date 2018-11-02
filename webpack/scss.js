const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = function(isDevelopment) {
    return {
        module: {
            rules: [{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: isDevelopment,
                            minimize: !isDevelopment,
                            publicPath: '../'
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            autoprefixer: {
                                browsers: ["last 2 versions"]
                            },
                            plugins: [
                                autoprefixer,
                                cssnano
                            ],
                            sourceMap: isDevelopment
                        },
                    },
                    {
                        loader: "resolve-url-loader",
                        options: {
                            sourceMap: isDevelopment,
                            debug: isDevelopment
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true // always true for resolve-url-loader
                        }
                    }
                ]
            }]
        }
    }
};
