# Emitter

> Node.js mixin, exposes `on()`, `once()`, `off()` in an object, allows encapsulating the emitter.


## Getting Started

```shell
npm install --save @cork-labs/mixin-emitter
```

```typescript
import { mixinEmitter } from '@cork-labs/mixin-emitter';

class Foobar implements IEmitter {
  private emitter: EventEmitter;

  constructor () {
    this.emitter = mixinEmitter(this);
  }

  bar () {
    this.emitter.emit('baz', 101, 102);
  }
}

const foobar = new Foobar(this);
foobar.on('baz', (arg1, arg2) => {
  console.log(arg1, arg2); // 101, 102
});
```


## API

### `mixinEmitter`

#### `mixinEmitter(object): EventEmitter`

Exposes `on()`, `once()`, `off()` in the object and returns the underlying `EventEmitter`.

- `object: any`


## Development

### Install dependencies

```
npm install -g nodemon http-server
```

### Code, test, publish

#### VSCode launchers:
- `test` - run tests once

#### NPM scripts:
- `npm run dev` - run tests (restarts when files saved)
- `npm run lint` - lint
- `npm run lint-fix` - lint and fix
- `npm test` - run all test suites and produce code coverage reports
- `npm run test-u` - run unit tests
- `npm run test-i` - run integration tests
- `npm run coverage` - serve test coverage reports
- `npm run clean` - delete all build artifacts
- `npm run build` - lint and test
- `npm run pub` - publish a patch version (use `npm-bump minor` to publish a minor version)


### Contributing

We'd love for you to contribute to our source code and to make it even better than it is today!

Check [CONTRIBUTING](https://github.com/cork-labs/contributing/blob/master/CONTRIBUTING.md) before submitting issues and PRs.


## Links

- [ts-node](https://www.npmjs.com/package/ts-node)
- [nyc](https://github.com/istanbuljs/nyc)
- [mocha](https://github.com/mochajs/mocha)
- [chai](https://github.com/chaijs/chai)
- [sinon](http://sinonjs.org/)
- [sinon-chai](https://github.com/domenic/sinon-chai)
- [npm-bump](https://www.npmjs.com/package/npm-bump)


## [MIT License](LICENSE)

[Copyright (c) 2019 Cork Labs](http://cork-labs.mit-license.org/2019)
