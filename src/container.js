class Container {
  // functions is an instance of Map
  constructor(functions) {
    this.functions = functions
  }

  register(name, func, deps = null) {
    const alreadyExist = this.has(name)

    if (alreadyExist) {
      throw new Error(`function with name ${name} already exists`)
    }
    const funcToStore = deps ? func.bind(null, deps) : func;
    // console.log('deps', deps)
    // console.log('funcToStore', funcToStore)
    this.functions.set(name, funcToStore);
  }

  get(name) {
    const func = this.functions.get(name);

    if (!func) {
      throw new Error(`the function ${name} does not exist in the container`)
    }

    return func;
  }

  has(name) {
    return this.functions.has(name);
  }
}

module.exports = Container;