
/**
 * flip
 * Flip takes a function as an argument, then makes the first argument the last.
 * 
 */
export const flip = fn => (first, ...rest) => fn(...rest, first);
