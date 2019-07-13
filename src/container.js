class Container {
  constructor() {
    this.functions = {};
  }

  register(name, func, deps = null) {
    const funcToStore = deps ? func.bind(null, deps) : func;
    this.functions[name] = funcToStore;
  }

  get(name) {
    return this.functions[name];
  }

  has(name) {
    return this.functions.hasOwnProperty(name);
  }
}

module.exports = Container;

// other container with autobinding
