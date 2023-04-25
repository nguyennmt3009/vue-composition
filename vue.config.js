'use strict';
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // lang: 'ts',
  // lintOnSave: false,
  // productionSourceMap: true,
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
      module: {
        rules: [
            {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              exclude: /node_modules/
            },
        ],
      },
      resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
        },
      },
  }
};