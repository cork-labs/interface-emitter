# Emitter

> Node.js mixin, exposes `on()`, `once()`, `off()` in an object, allows encapsulating the emitter.


## Getting Started

```shell
npm install --save @cork-labs/interface-emitter
```

```typescript
import { EventEmitter, EventName, IEmitter, ListenerCallback } from '@cork-labs/interface-emitter';

export class Foo implements IEmitter {
  private emitter: EventEmitter;

  constructor () {
    this.emitter = new EventEmitter();
  }

  public bar (...args: number[]) {
    this.emitter.emit('bar', 33, 42);
  }

  public on (event: EventName, listener: ListenerCallback): void {
    this.emitter.on(event, listener);
  }

  public off (event: EventName, listener: ListenerCallback): void {
    this.emitter.off(event, listener);
  }

  public once (event: EventName, listener: ListenerCallback): void {
    this.emitter.once(event, listener);
  }
}

const foo = new Foo();
foo.on('bar', () => {
  console.log(arg1, arg2); // 33, 42
});
```


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
