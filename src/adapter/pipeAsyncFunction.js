/**
 * ${filename}
 * ${descript}
 * create by ${author}
 */
export const pipeAsyncFunctions = (...fns) => arg =>
  fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
