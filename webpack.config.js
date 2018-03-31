const { VueLoaderPlugin } = require(`vue-loader`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const nodeSassMagicImporter = require(`node-sass-magic-importer`);
const OptimizeCSSAssetsPlugin = require(`optimize-css-assets-webpack-plugin`);
const path = require(`path`);
const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`);

module.exports = {
  entry: path.join(__dirname, `src`, `main.js`),
  output: {
    publicPath: ``,
  },
  mode: `development`,
  optimization: {
    splitChunks: {
      chunks: `all`,
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: `vue-loader`,
      },
      {
        test: /\.js$/,
        loader: `babel-loader`,
        include: [path.join(__dirname, `src`)],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          `css-loader`,
          {
            loader: `sass-loader`,
            options: {
              importer: nodeSassMagicImporter(),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, `dist`, `index.html`),
      inject: true,
      template: path.join(__dirname, `static`, `index.html`),
      environment: process.env.NODE_ENV,
    }),
  ],
};
