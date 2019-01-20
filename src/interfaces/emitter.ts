import { ListenerCallback } from '../types/listener-callback';

export interface IEmitter {
  on (event: any, listener: ListenerCallback): void;
  off (event: any, listener: ListenerCallback): void;
  once (event: any, listener: ListenerCallback): void;
}
