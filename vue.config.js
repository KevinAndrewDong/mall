const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,

  //关闭eslint
  lintOnSave: false,

  devServer: {
    proxy: {
      "/api": {
        target: "http://39.98.123.211",
        // pathRewrite: { "^/api": "" },
      },
    },
  },

  chainWebpack: (config) => {
    const imgRule = config.module.rule("images");
    imgRule
      .use("file-loader")
      .loader("image-webpack-loader")
      .tap((options) => {
        const ret = options || {};
        ret.pngquant = { quality: [0.65, 0.9], speed: 4 };
        return ret;
      });
  },
});
