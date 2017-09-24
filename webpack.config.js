const path = require('path');
const webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'src/app/js');
var OUTPUT_DIR = path.resolve(__dirname, 'src/dist');
var WEB_SERVER_BASE = path.resolve(__dirname, 'src/app');

module.exports = {

    // Po to, aby móc debuggować poszczególne pliki w JS
    devtool: "source-map",

    // Punkt startowy aplikacji
    entry: APP_DIR + '/app.js',

    // Punkt wyjściowy aplikacji
    output: {
        path: OUTPUT_DIR,
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.resolve(__dirname, WEB_SERVER_BASE),
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot-loader", "babel-loader"],
            },
        ],

    }
};