'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const emitterMixin = require('../src/index');

describe('emitterMixin', function () {
  it('should be a function', function () {
    expect(emitterMixin).to.be.a('function');
  });

  describe('api', function () {
    beforeEach(function () {
      this.object = {};
      this.emitter = emitterMixin(this.object);
    });

    it('should expose the methods', function () {
      expect(this.object.on).to.be.a('function');
      expect(this.object.once).to.be.a('function');
      expect(this.object.off).to.be.a('function');
    });

    describe('given a "on" subscriber', function () {
      beforeEach(function () {
        this.spy = sinon.spy();
        this.object.on('foobar', this.spy);
      });

      describe('when emit() is invoked', function () {
        beforeEach(function () {
          this.emitter.emit('foobar', 1, 2, 3);
        });

        it('should invoke the callback', function () {
          expect(this.spy).to.have.been.calledWithExactly(1, 2, 3);
        });

        describe('and when emit() is invoked again', function () {
          beforeEach(function () {
            this.emitter.emit('foobar', 'baz');
          });

          it('should invoke the callback again', function () {
            expect(this.spy.callCount).to.equal(2);
            expect(this.spy).to.have.been.calledWithExactly('baz');
          });
        });
      });

      describe('and that subcriber unsubscribes', function () {
        beforeEach(function () {
          this.object.off('foobar', this.spy);
        });
        describe('and when emit() is invoked again', function () {
          beforeEach(function () {
            this.emitter.emit('foobar', 'baz');
          });

          it('should not invoke the callback', function () {
            expect(this.spy.callCount).to.equal(0);
          });
        });
      });
    });

    describe('given a "once" subscriber', function () {
      beforeEach(function () {
        this.spy = sinon.spy();
        this.object.once('foobar', this.spy);
      });

      describe('when emit() is invoked', function () {
        beforeEach(function () {
          this.emitter.emit('foobar', 1, 2, 3);
        });

        it('should invoke the callback', function () {
          expect(this.spy).to.have.been.calledWithExactly(1, 2, 3);
        });

        describe('and when emit() is invoked again', function () {
          beforeEach(function () {
            this.emitter.emit('foobar', 'baz');
          });

          it('should not invoke the callback again', function () {
            expect(this.spy.callCount).to.equal(1);
          });
        });
      });
    });
  });
});
