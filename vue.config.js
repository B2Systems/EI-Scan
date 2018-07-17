module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `
          @import "@/sass/variables.scss";
          @import "~element-ui/packages/theme-chalk/src/index";
        `
      }
    }
  }
}
