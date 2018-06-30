# nextjs-starter

A customized Next.js starter kit with Express, Redux, Redux-Saga and SCSS.

# About

Next.js is a lightweight framework for static and server‑rendered applications. However, it takes a little time to set up the environment for some features we want. As a result, the boilerplate is here for quick build the project in the beginning.

# Features
- Server build with [Express](https://github.com/expressjs/express)
- State management with [redux](https://github.com/reduxjs/redux) and [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
- Async flow managment library with [redux-saga](https://github.com/redux-saga/redux-saga) and [next-redux-saga](https://github.com/bmealhouse/next-redux-saga)
- Persistent data collections for Javascript with [Immutalbe](https://github.com/facebook/immutable-js/)
- Send request to the server with [Axios](https://github.com/axios/axios)
- Stylying with SCSS with CSS pre-processor
- Styling with PostCss with CSS post-processor
- Setting up a custom alias for directories with [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)

# Getting started
```bash
git clone https://github.com/yrfang/nextjs-starter
cd nextjs-starter
yarn install
yarn start
```

Then open `http://localhost:3200` to view your app.

# Structure overview
```bash
├── README.md
├── next.config.js
├── postcss.config.js
├── nodemon.json
├── package.json
├── babelrc
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── about.js
│   └── index.js
├── server
│   └── index.js
│   └── routes.js
├── src
│   ├── actions
│   ├── api
│   ├── components
│   │   └── Layout
│   ├── constants
│   │   └── initialState.js
│   │   └── types.js
│   ├── reducers
│   ├── sagas
│   ├── stores
│   │   └── createStore.js
│   ├── styles
└── yarn.lock
```

# To Do
- raw-loader for CSS set up
- unit test environment
- lint environmnet and its rules
- dynamic routing for server
- storybook

# Reference
[Next.js](https://github.com/zeit/next.js/)
