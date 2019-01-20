import * as chai from 'chai';
import 'mocha';
import 'sinon';
import sinonChai from 'sinon-chai';

import { mixinEmitter } from './mixin-emitter';

const expect = chai.expect;
chai.use(sinonChai);
chai.use(sinonChai);

describe('mixins-emitter', function t () {
  it('should export the expected symbols', function t () {
    expect(mixinEmitter).to.be.a('function');
  });
});
