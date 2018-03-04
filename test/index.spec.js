'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const emitterMixin = require('./emitterMixin');

describe('emitterMixin', function () {
  it('should be a function', function () {
    expect(emitterMixin).to.be.a('function');
  });

  describe('api', function () {
    beforeEach(function () {
      this.object = {};
      this._emitter = emitterMixin(this._object);
    });

    it('should expose the methods', function () {
      expect(this.object.on).to.be.a('function');
      expect(this.object.once).to.be.a('function');
      expect(this.object.off).to.be.a('function');
    });

    describe('when emit() is invoked', function () {
      beforeEach(function () {
        this.spy = sinon.spy();
        this._emitter = emitterMixin(this._object);
        this.object.on('foobar', this.spy);
        this._emitter.trigger('foobar', 1, 2, 3);
      });

      it('should invoke the callback', function () {
        expect(this.spy).to.have.been.calledWithExactly(1, 2, 3);
      });
    });
  });
});
