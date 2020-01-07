
/**
 * unionWith
 * Returns every element that exists in any of the two arrays once, using a provided comparator function.
 *
 */
export const unionWith = (a, b, comp) =>
  Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));
