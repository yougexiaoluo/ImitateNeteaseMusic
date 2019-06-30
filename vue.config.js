module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "~@/assets/sass/index.scss";`
      }
    }
  }
}