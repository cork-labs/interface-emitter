import { EventEmitter, EventName, IEmitter, ListenerCallback } from '../src/index';

export class FooBar implements IEmitter {
  private emitter: EventEmitter;

  constructor () {
    this.emitter = new EventEmitter();
  }

  public bar (...args: number[]) {
    this.emitter.emit('bar', ...args);
  }

  public on (event: EventName, listener: ListenerCallback): void {
    this.emitter.on(event, listener);
  }

  public off (event: EventName, listener: ListenerCallback): void {
    this.emitter.off(event, listener);
  }

  public once (event: EventName, listener: ListenerCallback): void {
    this.emitter.once(event, listener);
  }
}
