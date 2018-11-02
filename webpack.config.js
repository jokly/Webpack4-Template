const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const typescript = require('./webpack/typescript');
const handlebars = require('./webpack/handlebars');
const scss = require('./webpack/scss');
const images = require('./webpack/images');
const favicon = require('./webpack/favicon');
const fonts = require('./webpack/fonts');
const devServer = require('./webpack/devServer');

const mainData = require('./src/data/main');

const SRC_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'dist');

module.exports = function(env, argv) {
    const isDevelopment = argv.mode !== 'production';

    const common = merge([
        {
            entry: {
                bundle: path.join(SRC_DIR, 'main.ts')
            },
            resolve: {
                extensions: ['.ts', '.js']
            },
            output: {
                path: DIST_DIR,
                filename: path.join('js', '[name].js')
            },
            devtool: isDevelopment && 'inline-source-map',
            plugins: [
                new CleanWebpackPlugin([DIST_DIR]),
                new webpack.LoaderOptionsPlugin({
                    options: {
                    handlebarsLoader: {}
                    }
                }),
                new MiniCssExtractPlugin({
                    filename: path.join('css', "[name].css"),
                    chunkFilename: path.join("css", "[id].css")
                }),
                new HtmlWebpackPlugin({
                    ...mainData,
                    template: path.join(SRC_DIR, 'main.hbs')
                })
            ]
        },
        typescript(),
        handlebars(),
        scss(isDevelopment),
        images(),
        fonts(),
    ]);

    if (argv.mode === "production") {
        return merge(
            common,
            favicon()
        );
    }
    else {
        return merge(
            common,
            devServer()
        );
    }
}
