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
require("sinon");
const sinon_chai_1 = __importDefault(require("sinon-chai"));
const mixin_emitter_1 = require("./mixin-emitter");
const expect = chai.expect;
chai.use(sinon_chai_1.default);
chai.use(sinon_chai_1.default);
describe('mixins-emitter', function t() {
    it('should export the expected symbols', function t() {
        expect(mixin_emitter_1.mixinEmitter).to.be.a('function');
    });
});
//# sourceMappingURL=index.spec.js.map