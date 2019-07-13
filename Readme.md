# DI Functionnal Container

This container allows you to practice Dependency Injection with Functionnal Programming.

## Getting Started

In the modern approach of javacscript programming, you will find <b>functionnal programming</b> and <b>pure functions</b>.

### Installing

You can install this library with git clone.

```
git clone https://github.com/BlondJP/di-container.git
```

### Usage

You can use the container this way:

```js
const { createContainer } = require("./");

const container = createContainer();

function func({ dependency }, param) {
  console.log("dependency", dependency);
  console.log("param", param);
}

container.register("func.service", func, { dependency: "gcp" });

const boundFunc = container.get("func.service");
boundFunc("fb");
```
