const { createContainer } = require("./");

const container = createContainer();

function func({ dependency }, param) {
  console.log("dependency", dependency);
  console.log("param", param);
}

container.register("func.service", func, { dependency: "gcp" });

const boundFunc = container.get("func.service");
boundFunc("fb");
