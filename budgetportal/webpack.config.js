const { resolve } = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const normalize = require('postcss-normalize');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'frontend-v1': './assets/js/scripts.js',
    'vulekamali-webflow': './assets/js/webflow/index.js',
  },
  output: {
    path: resolve(__dirname, 'assets/generated/'),
    filename: '[name].bundle.js',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader' },
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      },

      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer(),
                normalize(),
              ],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
     new MiniCssExtractPlugin({filename: 'styles.bundle.css'}),
  ]
};

const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  // Entry point for SCSS
  entry: "./assets/scss/styles.scss",

  // JavaScript and CSS output paths
  output: {
    path: resolve(__dirname, "assets/generated/"),
    // Use 'js.bundle.js' for JavaScript files (if needed)
    filename: "js.bundle.js", // You can name it differently or leave it empty if no JS is bundled
  },

  devtool: "source-map", // Optional, for debugging

  module: {
    rules: [
      // SCSS/CSS Loader
      {
        test: /\.s?css$/, // Matches both .css and .scss files
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into a separate file
          "css-loader", // Translates CSS into CommonJS
          {
            loader: "postcss-loader", // Adds PostCSS plugins (like autoprefixer)
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer(), // Example of PostCSS plugin to add vendor prefixes
                ],
              },
            },
          },
          "sass-loader", // Compiles Sass to CSS
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // This will generate a separate CSS file for the bundled CSS
      filename: "styles.bundle.css", // Output CSS file
    }),
  ],
};
