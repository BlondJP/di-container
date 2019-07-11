const { createContainer } = require("./lib");

const container = createContainer();
console.log(container);

function func({ p }, z) {
  console.log(p, z);
}

container.register("func", func, { p: "lol" });

const fun = container.get("func");
fun("MDRRRR");
