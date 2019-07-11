class SmartContainer {
  constructor() {
    this.functions = {};
    this.values = {};
  }

  register(name, func, isSmart) {
    console.log("func", func.arguments);
    // const funcToStore = deps ? func.bind(null, deps) : func;
    // this.functions[name] = funcToStore;
  }

  get(name) {
    return this.functions[name];
  }

  has(name) {
    return this.functions.hasOwnProperty(name);
  }
}

module.exports = SmartContainer;

// other container with autobinding
