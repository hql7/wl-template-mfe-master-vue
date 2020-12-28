
const { port } = require("./package");

// gzip压缩
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  // publicPath: './',
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      "/api": {
        target: "http://192.168.1.xxx:xxxx/",
        changeOrigin: true,
        pathRewrite: {},
        /**
         * @name 解决微前端环境下，子应用接口会被代理到主应用，proxy的接口匹配前缀如果和路由前缀一致，刷新将路由代理为接口致页面404问题
         * @param {*} req 
         */
        bypass: function (req) {
          if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html';
          }
        }
      },
    }
  },
  filenameHashing: true,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/css/variables/variables.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      // gzip压缩
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]", //目标资源名称
        algorithm: "gzip",
        test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, //处理所有匹配此 {RegExp} 的资源
        threshold: 10240,//只处理比这个值大的资源。按字节计算(楼主设置10K以上进行压缩)
        minRatio: 0.8 //只有压缩率比这个值小的资源才会被处理
      }),
      // 分析包大小
      // new BundleAnalyzerPlugin(),
    ],
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT',
    }
  }
};
