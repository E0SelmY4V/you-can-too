/**
 * Callback related
 * @version 1.0.0
 */
declare module './callback';

export const giveAndDo = <T>(n: (...arg: any[]) => T) => n();
export const giveAndReturn = <T>(n: T) => n;
export const cbNoArg = <T>(res: () => any, rej: (err: T) => any) => (err: T) => err === null ? res() : rej(err);
export const cbOneArg = <T, N>(res: (n: N) => any, rej: (err: T) => any) => (err: T, n: N) => err === null ? res(n) : rej(err);
export const cbArgs = <T, N extends any[]>(hdl: (...arg: N) => any, res: () => any, rej: (err: T) => any) => (err: T, ...arg: N) => err === null ? (hdl(...arg), res()) : rej(err);
