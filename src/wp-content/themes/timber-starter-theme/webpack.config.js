const path = require('path');

// include js minification plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// include css extraction and minification plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: ['./js/src/main.js', './css/src/main.scss'],
    output: {
        filename: './js/build/bundle.js',
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
            // perform babelization on all js files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            },
            // compile scss files to plain css
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        //extract css into dedicated file
        new MiniCssExtractPlugin({
            filename: './css/build/style.css' 
        }),
	    new BrowserSyncPlugin({
            proxy: 'localhost:8080',
            port: 3000,
            open: false,
            files: ['./*.php', './templates/**/*.twig']
	    })
    ],
    optimization: {
        minimizer: [
            // enable js minification plugin
            new UglifyJSPlugin({
                cache: true,
                parallel: true
            }),
            // enable css minification plugin
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};
