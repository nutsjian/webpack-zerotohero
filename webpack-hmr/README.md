#### basic
```bash
# 当我们执行 npm run build:basic 时，webpack 将 entry 中的源文件 index0.js 打包为 dist/main.js，并退出进程。
yarn build:basic
```

【问题】但是如果我们接下来改动了源文件的输出文本，会发现由于构建配置中没有任何对应处理，所以在保存后，打包后的文件内容并没有更新。为了同步改动效果，我们需要再次手动执行该命令。

#### watch: true
```bash
# 为了摆脱每次修改文件后都需要手动执行脚本才能进行编译的问题，webpack 中增加了 watch 模式，通过监控源码文件的变化来解决上面不能自动编译问题。
yarn build:watch
```

【问题】有了 watch 模式之后，我们在开发时就不用每次手动执行打包脚本了。但问题并未解决，为了看到执行效果，我们需要在浏览器中进行预览，但在预览时我们会发现，即使产物文件发生了变化，在浏览器里依然需要手动点击刷新才能看到变更后的效果。那么这个问题又该如何解决呢？

#### Live Reload
```bash
# 为了使每次代码变更后浏览器中的预览页面能自动显示最新效果而无须手动点击刷新，我们需要一种通信机制来连接浏览器中的预览页面与本地监控代码变更的进程。
```

```javascript
{
  devServer: {
    contentBase: "./dist",
    open: true
  }
}
```

【问题】但是在以下场景中仍然会遇到阻碍：在开发调试过程中，我们可能会在网页中进行一些操作，例如输入了一些表单数据想要调试错误提示的样式、打开了一个弹窗想要调试其中按钮的位置，然后切换回编辑器，修改样式文件进行保存。可是当我们再次返回网页时却发现，网页刷新后，之前输入的内容与打开的弹窗都消失了，网页又回到了初始化的状态。于是，我们不得不再次重复操作才能确认改动后的效果。对于这个问题，又该如何解决呢？

#### Hot Module Replacement (HMR)
```bash
yarn add css-loader style-loader -D -d
```

```javascript
{
  devServer: {
    hot: true
  }
}
```
为了解决页面刷新导致的状态丢失问题，webpack 提出了模块热替换的概念 `hot: true`。

+ 如果 `hot: false`，当修改 CSS 样式文件后，浏览器会重新刷新，原来如果表单添加的数据会丢失；
+ 如果 `hot: true`，修改源码中 CSS 的样式后，再回到网页端，我们则会发现这样一些变化：首先在网络面板中，只是新增了两个请求：hot-update.json 和 hot-update.js，而不像上一个立即刷新的示例中那样，会刷新页面重载所有请求；

#### webpack的打包流程
在讲 webpack 的打包流程之前我们先解释几个 webpack 中的术语：

```bash
module：指在模块化编程中我们把应用程序分割成的独立功能的代码模块。

chunk：指模块间按照引用关系组合成的代码块，一个 chunk 中可以包含多个 module。

chunk group：指通过配置入口点（entry point）区分的块组，一个 chunk group 中可包含一到多个 chunk。

bundling：webpack 打包的过程。

asset/bundle：打包产物。
```
