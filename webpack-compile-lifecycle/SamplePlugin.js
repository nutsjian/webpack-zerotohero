const chalk = require("chalk");

class SamplePlugin {
  apply(compiler) {
    var start = Date.now();
    var statsHooks = ['environment', 'entryOption', 'afterPlugins', 'compile'];
    var statsAsyncHooks = [
      'beforeRun',
      'beforeCompile',
      'make',
      'afterCompile',
      'emit',
      'done'
    ];

    statsHooks.forEach((hookName) => {
      compiler.hooks[hookName].tap('SamplePlugin', () => {
        console.log(`Compiler Hook ${hookName}, Time: ${chalk.red(Date.now() - start)}ms`);
      });
    });

    statsAsyncHooks.forEach((hookName) => {
      compiler.hooks[hookName].tapAsync('SamplePlugin', (data, callback) => {
        setTimeout(() => {
          console.log(
            `Compiler Async Hook ${hookName}, Time: ${chalk.red(Date.now() - start)}ms`
          );
          callback();
        });
      });
    });

    compiler.hooks.compilation.tap('SamplePlugin', (compilation) => {
      var compilationStatsHooks = [
        'addEntry',
        'succeedEntry',
        'finishModules',
        'seal',
        'optimize',
        'optimizeAssets',
        'afterSeal'
      ];

      compilationStatsHooks.forEach((hookName) => {
        compilation.hooks[hookName].tap('SamplePlugin', () => {
          console.log(
            `Compilation Hook ${hookName}, Time: ${chalk.red(Date.now() - start)}ms`
          );
        });
      });

      compilation.hooks.buildModule.tap('SamplePlugin', (module) => {
        console.log(
          `Compilation Hook buildModule, module ${module.identifier().substr(__dirname.length + 1)} Time: ${chalk.red(Date.now() - start)}ms`
        )
      });
    });
  }
}

module.exports = SamplePlugin;