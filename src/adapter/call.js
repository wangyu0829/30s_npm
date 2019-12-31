
/**
 * call
 * Given a key and a set of arguments, call them when given a context. Primarily useful in composition.
 * 
 */
export const call = (key, ...args) => context => context[key](...args);
