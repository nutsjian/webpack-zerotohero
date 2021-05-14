1. webpack的热更新是怎么做到的？说明其原理。
2. Loader 和 Plugin 的区别？
3. Webpack 的构建流程是什么样的？
4. 什么是 bundle chunk chunkgroup module？
5. sessionStorage 和 localStorage 的区别
6. dll 动态链接库（把不变的第三方库，独立打包，开发的时候直接引用打包好的，提高开发效率）
7. 你用webpack中涉及到的一些优化？
  1. 去除无用的 css 样式 purgecss-webpack-plugin
  2. Tree-Shaking删除无用代码
  3. 使用动态链接库，提高打包速度
  4. 懒加载
  5. 抽取公共代码（不会和业务逻辑打包在一起，增加缓存304）
  6. 热更新
  7. 前后端分离
  8. ignoreplugin：忽略打包第三方模块指定的目录，例如 moment 的语言包
  9. happypack 多线程打包
8. Vuex 的工作流程
9. 路由导航守卫
10. 兄弟组件之间通信，父子组件之间通信
11. keep-alive组件，多出来的两个生命周期（activated、deactivated）
12. 自定义过滤器的实现
13. style 中 scoped 的作用
14. 什么是 Promise？pending, fulfilled, rejected
15. 数组去重方法
16. 深拷贝、浅拷贝区别？
17. js 中的宿主对象、原生对象
18. Object.assign()
19. JS 事件委托模型


# webpack-zerotohero

### 热更新
Auto Compile（自动编译） -> Live Reload（自动刷新浏览器） -> HMR(Hot Module Replacement，模块热替换)

1. 自动编译
watch 模式，webpack增加了watch模式，通过监控源代码文件的变化来解决上面不能自动编译问题。
webpack.config.js
{
  watch: true
}

或者 --watch


2. 自动刷新浏览器
webpack.config.js
{
  devServer: {
    contentBase: "",
    open: true
  }
}

通过 sockjs-node 来触发自动刷新。

3. 