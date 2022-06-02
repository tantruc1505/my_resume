const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const devServer = {
    port: 3000,
    open: true,
    contentBase: path.join(__dirname, '/'),
    historyApiFallback: true // enable router react
}

module.exports = {
    // cac file output
    entry: {
        bundle: ['babel-polyfill', './js/run.js'],
        themeDark: './js/themeDark.js',
        themeLight: './js/themeLight.js'
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].[contenthash].js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                loader: 'babel-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },

                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images',
                            publicPath: 'images'
                        }
                    }
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|wav|mp3|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts',
                            publicPath: 'fonts'
                        }
                    }
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    optimization: {
        // Cache vendor
        splitChunks: {
            cacheGroups: {
                vendors: {
                    chunks: "all",
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    enforce: true
                },
            }
        },
        runtimeChunk: 'single',
    },

    plugins: [
        new CleanWebpackPlugin(),
        // parse template duoi khac thanh HTML
        new HtmlWebpackPlugin({
            chunks: ['bundle','themeDark'],
            template: './index.html',
            filename: 'index.html'
        }),
        // Extract CSS ra khoi bundle thanh file rieng
        new MiniCssExtractPlugin({
            chunks: ['bundle', 'vendors','themeDark','themeLight'],
            filename: '[name].css',
            chunkFilename: "[name].css",
        }),
        // Khai bao cu phap su dung cac thu vien
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],
    devServer
}