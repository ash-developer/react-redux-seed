React redux seed
================
Base project to start developing with react and redux. Project includes pre installed most popular packages for developing with react. 

## Pull repository
```bash
git clone git@github.com:ash-developer/react-redux-seed.git ./YOUR-PROJECT-TITLE
git remote set-url origin https://github.com/YOUR-PROJECT/REPOSITORY.git
```

## Requirements
**node.js and npm**

node.js version should be >= 4.0.0

install node.js and npm - [how to](https://docs.npmjs.com/getting-started/installing-node)

## Installation
```bash
$ npm install
```

### Run localy
```bash
$ npm start
```
Server will be started on [http://localhost:8080/](http://localhost:8080/). To change it got to `./webpack.config.js` file and modify setting `devServer.port`

### Production build
```bash
$ npm run build
```
Compiled files will be located at ./dist/ folder

#### Docs
**dev tools**
 - webpack setup - [link](http://www.pro-react.com/materials/appendixA/)
 - babel - [link](https://babeljs.io/)
 - eslint - [link](http://eslint.org/)
 - redux-logger (pretty logs for redux) - [link](https://github.com/fcomb/redux-logger)

**tools**
 - react - [link](https://facebook.github.io/react/docs/getting-started.html)
 - react-router - [link](https://github.com/reactjs/react-router/tree/master/docs)
 - redux - [link](http://redux.js.org/index.html)
 - redux-saga (async redux actions) - [link](https://github.com/yelouafi/redux-saga)
 - immutable (provides many immutable data structures) - [link](https://facebook.github.io/immutable-js/docs/#/)
