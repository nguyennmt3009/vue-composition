'use strict';
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
//   lintOnSave: false,
  // productionSourceMap: true,
  lang: 'ts',
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
};
