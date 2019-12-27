
/**
 * overArgs
 * Creates a function that invokes the provided function with its arguments transformed
 * 
 */
export const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));
