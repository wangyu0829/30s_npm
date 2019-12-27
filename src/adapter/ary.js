/**
 * collectInto
 * Creates a function that accepts up to n arguments, ignoring any additional arguments
 *
 */
export const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
