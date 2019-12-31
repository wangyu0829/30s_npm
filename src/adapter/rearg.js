
/**
 * rearg
 * Creates a function that invokes the provided function with its arguments arranged according to the specified indexes
 * 
 */
export const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
