"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = __importStar(require("chai"));
require("mocha");
const sinon_1 = __importDefault(require("sinon"));
const sinon_chai_1 = __importDefault(require("sinon-chai"));
const mixin_emitter_1 = require("./mixin-emitter");
const expect = chai.expect;
chai.use(sinon_chai_1.default);
chai.use(sinon_chai_1.default);
describe('mixinEmitter()', function t() {
    beforeEach(function t() {
        this.object = {};
        this.emitter = mixin_emitter_1.mixinEmitter(this.object);
    });
    it('should be a function', function t() {
        expect(mixin_emitter_1.mixinEmitter).to.be.a('function');
    });
    it('should expose the methods', function t() {
        expect(this.object.on).to.be.a('function');
        expect(this.object.once).to.be.a('function');
        expect(this.object.off).to.be.a('function');
    });
    describe('given a "on" subscriber', function t() {
        beforeEach(function t() {
            this.spy = sinon_1.default.spy();
            this.object.on('foobar', this.spy);
        });
        describe('when emit() is invoked', function t() {
            beforeEach(function t() {
                this.args = [1, 0, -1];
                this.emitter.emit('foobar', ...this.args);
            });
            it('should invoke the callback', function t() {
                expect(this.spy).to.have.been.calledWithExactly(...this.args);
            });
            describe('and when emit() is invoked again', function t() {
                beforeEach(function t() {
                    this.emitter.emit('foobar', 'baz');
                });
                it('should invoke the callback again', function t() {
                    const expected = 2;
                    expect(this.spy.callCount).to.equal(expected);
                    expect(this.spy).to.have.been.calledWithExactly('baz');
                });
            });
        });
        describe('and that subcriber unsubscribes', function t() {
            beforeEach(function t() {
                this.object.off('foobar', this.spy);
            });
            describe('and when emit() is invoked again', function t() {
                beforeEach(function t() {
                    this.emitter.emit('foobar', 'baz');
                });
                it('should not invoke the callback', function t() {
                    expect(this.spy.callCount).to.equal(0);
                });
            });
        });
    });
    describe('given a "once" subscriber', function t() {
        beforeEach(function t() {
            this.spy = sinon_1.default.spy();
            this.object.once('foobar', this.spy);
        });
        describe('when emit() is invoked', function t() {
            beforeEach(function t() {
                this.args = [1, 0, -1];
                this.emitter.emit('foobar', ...this.args);
            });
            it('should invoke the callback', function t() {
                expect(this.spy).to.have.been.calledWithExactly(...this.args);
            });
            describe('and when emit() is invoked again', function t() {
                beforeEach(function t() {
                    this.emitter.emit('foobar', 'baz');
                });
                it('should not invoke the callback again', function t() {
                    expect(this.spy.callCount).to.equal(1);
                });
            });
        });
    });
});
//# sourceMappingURL=mixin-emitter.spec.js.map