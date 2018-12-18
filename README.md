# webpack-starter
[![Build Status](https://travis-ci.org/jojoee/webpack-starter.svg)](https://travis-ci.org/jojoee/webpack-starter) [![Greenkeeper badge](https://badges.greenkeeper.io/jojoee/webpack-starter.svg)](https://greenkeeper.io/)

## Getting Started
1. Install [Node.js](https://nodejs.org/)
2. Install global: `npm install -g yarn bower`
3. Set path (e.g. `cd C:\xampp\htdocs\jojoee.com\babel`)
4. Go to project: (e.g. `cd babel`)
5. Install dependencies: `yarn`

## TODO
- [ ] Refactor
- [ ] Try Webpack 2

## Projects

### babel
- [x] ES6
- [ ] Hot reload (sometimes work)
- [ ] eslint
- [ ] Testing
- [x] Inject `style` into `script`
- [x] Attach compiled `script` file into compiled html

```
Webpack: 1

Build: `npm run build`
Build (dev-server): `npm run dev`
Lint: `npm run lint`
```

### react
- [x] ES6
- [x] react-hot-loader
- [ ] eslint
- [ ] Testing
- [x] Sass
- [x] Inject `style` into `script`
- [x] Attach compiled `script` file into compiled html

```
Webpack: 1

Build: `npm run build`
Build (dev-server): `npm run dev`
```

## react-isomorphic
- [x] react
- [x] react-hot-loader
- [x] react-router
- [ ] eslint
- [ ] Testing
- [x] Sass
- [x] Inject `style` into `script`
- [x] Attach compiled `script` file into compiled html

```
Webpack: 1

Client build: `npm run client.build`
Client build (dev-server): `npm run client.dev`
Client build (for production): `npm run client.build.prod`

Server start (non-isomorphic): `npm run start.norender`
Server start (isomorphic): `npm run server.build && npm run start`
Server start (isomorphic + prod): `npm run server.build.prod && npm run start`
```

## Reference and Tutorial
- https://github.com/AriaFallah/WebpackTutorial
- https://github.com/richardkall/react-starter
- https://webpack.github.io/docs/tutorials/getting-started/
- https://github.com/petehunt/webpack-howto
- http://tylermcginnis.com/react-js-tutorial-1-5-utilizing-webpack-and-babel-to-build-a-react-js-app/
- [Webpack Tutorial - Replace Gulp/Grunt plugins with a single tool](https://www.youtube.com/watch?v=9kJVYpOqcVU)
