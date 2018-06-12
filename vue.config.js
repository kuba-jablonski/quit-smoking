module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/css/_variables.scss";`
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "vue-svg-loader",
          options: {
            svgo: {
              plugins: [{ removeDoctype: true }, { removeComments: true }]
            }
          }
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule("svg")
      .test(() => false)
      .use("file-loader");
  }
};
