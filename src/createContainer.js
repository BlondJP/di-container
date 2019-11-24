const Container = require("./container");

function createContainer() {
  const initialFunctions = new Map()
  return new Container(initialFunctions)
}

module.exports = createContainer;
