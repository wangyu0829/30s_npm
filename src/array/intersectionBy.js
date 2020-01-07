
/**
 * intersectionBy
 * Returns a list of elements that exist in both arrays, after applying the provided function to each array element of both.
 *
 */

export const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};
