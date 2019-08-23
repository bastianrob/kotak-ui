module.exports = {
  entry: "./src/client.js",
  module: {
    rules: [{
      test: /\.(svelte|js)$/,///\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.(svelte)$/,
      exclude: /node_modules/,
      use: {
        loader: 'svelte-loader',
        options: {
          hotReload: true
        }
      }
    }]
  }
}