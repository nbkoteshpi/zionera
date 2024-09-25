const { template } = require('@babel/core');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point for the application
  output: {
    filename: 'bundle.js',  // Output bundled file
    path: path.resolve(__dirname, 'dist'),  // Path for the output directory
    publicPath: '/',
  },
  mode: 'development',  // Mode: 'development' or 'production'
  module: {
    rules: [
      {
        test: /src\\.*\.(js|jsx|ts|tsx)$/,  // Use Babel to transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,  // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Use `static` instead of `contentBase`
    },
    compress: true, 
    port: 8082,
    hot: true,
    open: true,
    historyApiFallback: true, 
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename:"index.html",
      }),
  ]
};
