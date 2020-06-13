import { join } from "path";

const include = join(__dirname, 'src')

export default {
  entry: "./src/index.js",
  output: {
    filename: '[name].[contenthash].js',
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "starWarsNames"
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
}