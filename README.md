# Emitter

> Node.js mixin, exposes `on()`, `once()`, `off()` in an object, allows encapsulating the emitter.


## Getting Started

```shell
npm install --save @cork-labs/mixin-emitter
```

```javascript
const emitterMixin = require('@cork-labs/mixin-emitter');

class Foobar () {
  constructor() {
    this._emitter = emitterMixin(this);
  }

  bar () {
    this._emitter.emit('baz', 101, 102);
  }
}

const foobar = new Foobar(this);
foobar.on('baz', (arg1, arg2) => {
  console.log(arg1, arg2); // 101, 102
});
```


## API

### emitterMixin(instance[, methods])

- `instance` - where to expose the methods
- `methods` - what methods to expose, defaults to `['on', 'once', 'off']`

## Develop

```shell
# lint and fix
npm run lint

# run test suite
npm test

# lint and test
npm run build

# serve test coverage
npm run coverage

# publish a minor version
node_modules/.bin/npm-bump minor
```


### Contributing

We'd love for you to contribute to our source code and to make it even better than it is today!

Check [CONTRIBUTING](https://github.com/cork-labs/contributing/blob/master/CONTRIBUTING.md) before submitting issues and PRs.


## Links

- [npm-bump](https://www.npmjs.com/package/npm-bump)
- [chai](http://chaijs.com/api/)
- [sinon](http://sinonjs.org/)
- [sinon-chai](https://github.com/domenic/sinon-chai)


## [MIT License](LICENSE)

[Copyright (c) 2018 Cork Labs](http://cork-labs.mit-license.org/2018)
