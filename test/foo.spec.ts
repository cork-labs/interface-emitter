import * as chai from 'chai';
import 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { FooBar } from './foo-bar';

const expect = chai.expect;
chai.use(sinonChai);
chai.use(sinonChai);

describe('IEmitter', function t () {
  beforeEach(function t () {
    this.foo = new FooBar();
  });

  it('should expose the methods', function t () {
    expect(this.foo.on).to.be.a('function');
    expect(this.foo.once).to.be.a('function');
    expect(this.foo.off).to.be.a('function');
  });

  describe('given a "on" subscriber', function t () {
    beforeEach(function t () {
      this.spy = sinon.spy();
      this.foo.on('bar', this.spy);
    });

    describe('when emit() is invoked', function t () {
      beforeEach(function t () {
        this.args = [1, 0, -1];
        this.foo.bar(...this.args);
      });

      it('should invoke the callback', function t () {
        expect(this.spy).to.have.been.calledWithExactly(...this.args);
      });

      describe('and when emit() is invoked again', function t () {
        beforeEach(function t () {
          this.foo.bar('baz');
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
        this.foo.off('bar', this.spy);
      });
      describe('and when emit() is invoked again', function t () {
        beforeEach(function t () {
          this.foo.bar('baz');
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
      this.foo.once('bar', this.spy);
    });

    describe('when emit() is invoked', function t () {
      beforeEach(function t () {
        this.args = [1, 0, -1];
        this.foo.bar(...this.args);
      });

      it('should invoke the callback', function t () {
        expect(this.spy).to.have.been.calledWithExactly(...this.args);
      });

      describe('and when emit() is invoked again', function t () {
        beforeEach(function t () {
          this.foo.bar('baz');
        });

        it('should not invoke the callback again', function t () {
          expect(this.spy.callCount).to.equal(1);
        });
      });
    });
  });
});
