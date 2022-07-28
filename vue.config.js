const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
<<<<<<< HEAD
=======
  devServer: {
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
      }
    }
  }
>>>>>>> 8284607a95eefe509a71b3ee85bd32eba903937d
})
