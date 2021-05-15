```javascript
//第一种：基于命令行的方式
webpack --config webpack.config.basic.js
//第二种：基于代码的方式, build/webpack.config.compile.js
var webpack = require('webpack')
var config = require('./webpack.config.basic.js')
webpack(config, (err, stats) => {})
```

这一函数的核心逻辑是：根据配置生成编译器实例 compiler，然后处理参数，执行 WebpackOptionsApply().process，根据参数加载不同内部插件。在有回调函数的情况下，根据是否是 watch 模式来决定要执行 compiler.watch 还是 compiler.run。

为了讲解通用的流程，我们以没有 watch 模式的情况进行分析。简化流程后的代码示例如下：

```javascript
const webpack = (options, callback) => {
  options = ... //处理options默认值
  let compiler = new Compiler(options.context)
  ... //处理参数中的插件等
  compiler.options = new WebpackOptionsApply().process(options, compiler); //分析参数，加载各内部插件
  ...
  if (callback) {
    ... 
    compiler.run(callback)
  }
  return compiler
}
```

