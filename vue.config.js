const path = require('path');

module.exports = {
  pages: {
    app: {
      entry: './src/main.js',
      template: './public/index.html',
      filename: 'index.html',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "styles/common/_variables.sass"; @import "styles/common/_mixins.sass";',
      },
    },
  },
  pluginOptions: {
    module: true,
    // 'style-resources-loader': {
    //   preProcessor: 'sass',
    //   patterns: [],
    // },
  },
  chainWebpack: config => {
    config.module.rules.delete('svg');
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
        },
      ],
    },
    resolve: {
      alias: {
        'root': path.resolve(__dirname, './src'),
        'icons': path.resolve(__dirname, './src/assets/icons'),
        'styles': path.resolve(__dirname, './src/assets/sass'),
        'atoms': path.resolve(__dirname, './src/components/atoms'),
        'molecules': path.resolve(__dirname, './src/components/molecules'),
        'organisms': path.resolve(__dirname, './src/components/organisms'),
        'templates': path.resolve(__dirname, './src/components/templates'),
        'pages': path.resolve(__dirname, './src/components/pages'),
        'library': path.resolve(__dirname, './src/library'),
        'services': path.resolve(__dirname, './src/services'),
      },
    },
  },
};
