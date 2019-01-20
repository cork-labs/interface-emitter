import * as chai from 'chai';
import 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { mixinEmitter } from './mixin-emitter';

const expect = chai.expect;
chai.use(sinonChai);
chai.use(sinonChai);

describe('mixinEmitter()', function t () {
  beforeEach(function t () {
    this.object = {};
    this.emitter = mixinEmitter(this.object);
  });

  it('should be a function', function t () {
    expect(mixinEmitter).to.be.a('function');
  });

  it('should expose the methods', function t () {
    expect(this.object.on).to.be.a('function');
    expect(this.object.once).to.be.a('function');
    expect(this.object.off).to.be.a('function');
  });

  describe('given a "on" subscriber', function t () {
    beforeEach(function t () {
      this.spy = sinon.spy();
      this.object.on('foobar', this.spy);
    });

    describe('when emit() is invoked', function t () {
      beforeEach(function t () {
        this.args = [1, 0, -1];
        this.emitter.emit('foobar', ...this.args);
      });

      it('should invoke the callback', function t () {
        expect(this.spy).to.have.been.calledWithExactly(...this.args);
      });

      describe('and when emit() is invoked again', function t () {
        beforeEach(function t () {
          this.emitter.emit('foobar', 'baz');
        });

        it('should invoke the callback again', function t () {
          const expected = 2;
          expect(this.spy.callCount).to.equal(expected);
          expect(this.spy).to.have.been.calledWithExactly('baz');
        });
      });
    });

    describe('and that subcriber unsubscribes', function t () {
      beforeEach(function t () {
        this.object.off('foobar', this.spy);
      });
      describe('and when emit() is invoked again', function t () {
        beforeEach(function t () {
          this.emitter.emit('foobar', 'baz');
        });

        it('should not invoke the callback', function t () {
          expect(this.spy.callCount).to.equal(0);
        });
      });
    });
  });

  describe('given a "once" subscriber', function t () {
    beforeEach(function t () {
      this.spy = sinon.spy();
      this.object.once('foobar', this.spy);
    });

    describe('when emit() is invoked', function t () {
      beforeEach(function t () {
        this.args = [1, 0, -1];
        this.emitter.emit('foobar', ...this.args);
      });

      it('should invoke the callback', function t () {
        expect(this.spy).to.have.been.calledWithExactly(...this.args);
      });

      describe('and when emit() is invoked again', function t () {
        beforeEach(function t () {
          this.emitter.emit('foobar', 'baz');
        });

        it('should not invoke the callback again', function t () {
          expect(this.spy.callCount).to.equal(1);
        });
      });
    });
  });
});
