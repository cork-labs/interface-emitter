export interface IEmitter {
  on (event: any, listener: (...args: any[]) => void): void;
  off (event: any, listener: (...args: any[]) => void): void;
  once (event: any, listener: (...args: any[]) => void): void;
}
