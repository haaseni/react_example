var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

var config = {    
    mode: "development",  
    entry: path.join(__dirname, "./src/index.js"),  
    module: {
        rules: [
            {
                test: /\.js$/,                
                loader: "babel-loader",
                exclude: /node_modules/
            },            
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin("dist", {}),
        new CopyWebpackPlugin([
            { 
                from: './public', 
                to: 'public' 
            }
          ]),
        new HtmlWebpackPlugin({
          inject: false,
          hash: true,
          template: "./src/index.html",
          filename: "index.html"
        }),
        new WebpackMd5Hash()
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist'
    }
};

module.exports = config;