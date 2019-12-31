
/**
 * unary
 * Creates a function that accepts up to one argument, ignoring any additional arguments.
 *
 */

export const unary = fn => val => fn(val);
