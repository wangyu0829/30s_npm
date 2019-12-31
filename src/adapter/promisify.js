/**
 * promisify
 * Converts an asynchronous function to return a promise.
 *
 */

export const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result))),
  );
