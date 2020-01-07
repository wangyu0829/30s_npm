
/**
 * symmetricDifferenceBy
 * Returns the symmetric difference between two arrays, after applying the provided function to each array element of both.
 *
 */

export const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map(v => fn(v))),
    sB = new Set(b.map(v => fn(v)));
  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};
