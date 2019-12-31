
/**
 * over
 * Creates a function that invokes each provided function with the arguments it receives and returns the results.
 * 
 */
export const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
