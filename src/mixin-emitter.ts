import { EventEmitter } from 'events';

/**
 * add public emitter API to object, attached to an internal `Emitter` obj
 *
 * @param {object} object
 */
export const mixinEmitter = (object: any): EventEmitter => {
  const privateEmitter = new EventEmitter();

  object.on = (event: string | symbol, listener: (...args: any[]) => void) => {
    privateEmitter.on(event, listener);
  };

  object.off = (event: string | symbol, listener: (...args: any[]) => void) => {
    privateEmitter.off(event, listener);
  };

  object.once = (event: string | symbol, listener: (...args: any[]) => void) => {
    privateEmitter.once(event, listener);
  };

  return privateEmitter;
};
