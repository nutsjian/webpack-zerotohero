class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.run.tap("HelloWorldPlugin", compilation => {
      console.log("hello world");
    })
  }
}

module.exports = HelloWorldPlugin;
