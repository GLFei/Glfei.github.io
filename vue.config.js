const webpack = require('webpack');
const path = require('path');

module.exports = {
  // 如果不需要生产时的源映射，那么将此设置为false
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      // 解决vue3部署时报错
      new webpack.DefinePlugin({
        __VUE_I18N_LEGACY_API__: JSON.stringify(false),
        __VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
        __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
      }),
    ],
  },
  chainWebpack: config => {
    config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js');
  },
};
