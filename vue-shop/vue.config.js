// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const target = "http://localhost:3000";
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "^/download": {
        // 이런 uri가 들어오면 http://localhost:3000이 URL에 자동 추가?
        target,
        changeOrigin: true,
      },
      "^/api": {
        target,
        changeOrigin: true,
      },
      "^/upload": {
        target,
        changeOrigin: true,
      },
    },
  },
};
