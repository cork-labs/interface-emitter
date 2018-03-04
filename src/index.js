'use strict';

const Events = require('events');

const METHODS = ['on', 'once', 'off'];

/**
 * add public emitter API to object, attached to an internal `Emitter` obj
 *
 * @param {object} object
 * @param {array} methods to expose
 */
const emitterMixin = (object, methods) => {
  const privateEmitter = new Events();

  methods = methods || METHODS.slice(0);

  methods.forEach((method) => {
    if (METHODS.indexOf(method) === -1) {
      throw new Error(`Invalid method ${method}.`);
    }
    object[method] = (event, callback) => {
      privateEmitter[method](event, callback);
    };
  });

  return privateEmitter;
};

module.exports = emitterMixin;
