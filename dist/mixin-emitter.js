"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
/**
 * add public emitter API to object, attached to an internal `Emitter` obj
 *
 * @param {object} object
 */
exports.mixinEmitter = (object) => {
    const privateEmitter = new events_1.EventEmitter();
    object.on = (event, listener) => {
        privateEmitter.on(event, listener);
    };
    object.off = (event, listener) => {
        privateEmitter.off(event, listener);
    };
    object.once = (event, listener) => {
        privateEmitter.once(event, listener);
    };
    return privateEmitter;
};
//# sourceMappingURL=mixin-emitter.js.map