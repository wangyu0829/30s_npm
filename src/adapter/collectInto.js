/**
 * collectInto
 * Changes a function that accepts an array into a variadic function
 *
 */
export const collectInto = fn => (...args) => fn(args);
