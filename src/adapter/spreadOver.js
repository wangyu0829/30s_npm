
/**
 * spreadOver
 * Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function
 * 
 */
export const spreadOver = fn => argsArr => fn(...argsArr);
