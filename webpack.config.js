const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Main JavaScript entry point
  output: {
    filename: 'bundle.js', // The output file in the dist folder
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the dist folder before each build
  },
  mode: 'development', // For development mode (change to 'production' for production build)

  module: {
    rules: [
      {
        test: /\.css$/, // CSS loader
        use: ['style-loader', 'css-loader'], // Loaders to inject CSS into the DOM
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Image loader for assets
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Font loader
        type: 'asset/resource',
      },
      {
        test: /\.js$/, // JS loader
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Ensures modern JavaScript syntax compatibility
        },
      },
    ],
  },

  plugins: [
    // This plugin will automatically inject the bundled JS and CSS into index.html
    new HtmlWebpackPlugin({
      template: './src/index.html', // Your source HTML file
    }),
  ],

  devServer: {
    static: './dist', // Serve content from the dist folder
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },
};
