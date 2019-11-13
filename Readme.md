# DI Functionnal Container

This container allows you to practice Dependency Injection with Functionnal Programming.

## Getting Started

In the modern approach of javascript programming, you will find <b>functionnal programming</b> and <b>pure functions</b> as recommandations. This container is thought to allow those practices.

### Installing

You can install this library with git clone.

```
yarn add fp-di-container
```
or
```
npm install fp-di-container --save
```

### Usage

You can use the container this way:

```js
const {createContainer} = require('fp-di-container')

const container = createContainer();

function func({ dependency }, param) {
  console.log("dependency", dependency);
  console.log("param", param);
}

container.register("func.service", func, { dependency: "gcp" });

const boundFunc = container.get("func.service");
boundFunc("fb");
```

### Usage in a express app

Your index.js would look like that :

```js
const express = require('express')
const server = express()
const port = 4001

const myContainer = require('./container')

server.get('/users', myContainer.get('usersController'))

server.listen(port, console.log(`server listenning on port ${port}`))
```

Your controller would have that kind of signature
Notice that the returned signature is <b>async function usersController (req, res)</b>
```js
async function usersController ({fetchUsers}, req, res) {
    const users = await fetchUsers()
    return res.send(users)
}
```

Your Business Logic would be like that

```js
async function fetchUsers() {
    return [
        {name: "Bill"},
        {name: "Steve"},
        {name: "Mark"}
    ]
}
```

Your container usage would be like that

```js
const {createContainer} = require('fp-di-container')
const container = createContainer()

// loading business logic functions
const fetchUsers = require('./fetchUsers')

// loading controllers
const usersController = require('./usersController')

// bind usefull functions on controllers
container.register('usersController', usersController, {fetchUsers})

module.exports = container;
```