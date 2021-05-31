const chalk = require('chalk')

const PluginName = 'TimingPlugin'

class WebpackTiming {
  apply(compiler) {
    const applyStart = Date.now()
    let afterCompileStart
    compiler.hooks.afterCompile.tap(PluginName, () => {
      afterCompileStart = Date.now()
    })
    compiler.hooks.done.tap(PluginName, () => {
      console.log(
        'after Compile Time',
        `${chalk.magentaBright(Date.now() - afterCompileStart)}ms, `,
        `build duration: ${Date.now() - applyStart}ms`
      )
    })
    compiler.hooks.compilation.tap(PluginName, (compilation) => {
      const lifeHooks = [
        {
          name: 'optimizeDependencies',
          start: 'optimizeDependencies',
          end: 'afterOptimizeDependencies',
        },
        { name: 'createChunks', start: 'beforeChunks', end: 'afterChunks' },
        { name: 'optimizeModules', start: 'optimize', end: 'optimizeChunks' },
        {
          name: 'optimizeChunks',
          start: 'optimizeChunks',
          end: 'afterOptimizeChunks',
        },
        {
          name: 'optimizeTree',
          start: 'optimizeTree',
          end: 'afterOptimizeTree',
        },
        {
          name: 'optimizeChunkModules',
          start: 'optimizeChunkModules',
          end: 'afterOptimizeChunkModules',
        },
        {
          name: 'moduleIds',
          start: 'beforeModuleIds',
          end: 'afterOptimizeModuleIds',
        },
        {
          name: 'chunkIds',
          start: 'beforeChunkIds',
          end: 'afterOptimizeChunkIds',
        },
        { name: 'hash', start: 'beforeHash', end: 'afterHash' },
        {
          name: 'moduleAssets',
          start: 'beforeModuleAssets',
          end: 'shouldGenerateChunkAssets',
        },
        {
          name: 'chunkAssets',
          start: 'beforeChunkAssets',
          end: 'additionalAssets',
        },
        // optimizeChunkAssets 已经在 v5 版本中废弃了
        // 取而代之的是：Compilation.hooks.processAssets
        {
          name: 'optimizeChunkAssets',
          start: 'optimizeChunkAssets',
          // afterOptimizeChunkAssets 在 v5 中废弃了
          // 取而代之的是：Compilation.hooks.processAssets
          end: 'afterOptimizeChunkAssets',
        },
        {
          name: 'optimizeAssets',
          start: 'optimizeAssets',
          end: 'afterOptimizeAssets',
        },
      ]

      lifeHooks.forEach(({ name, start, end }) => {
        let startTime
        if (!compilation.hooks[start]) {
          console.log('no hooks', start)
        }
        if (!compilation.hooks[end]) {
          console.log('no hooks', end)
        }
        compilation.hooks[start].tap(PluginName, () => {
          startTime = Date.now()
        })
        compilation.hooks[end].tap(PluginName, () => {
          const cost = Date.now() - startTime
          // if (cost < 10) {
          //   return
          // }
          console.log(
            `[Step ${name}] costs: ${chalk.red(cost)}ms, `,
            `build duration: ${Date.now() - applyStart}ms`
          )
        })
      })
    })
  }
}

module.exports = WebpackTiming