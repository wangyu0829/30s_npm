
/**
 * symmetricDifferenceWith
 * Returns the symmetric difference between two arrays, using a provided function as a comparator.
 *
 */
export const symmetricDifferenceWith = (arr, val, comp) => [
  ...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),
  ...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)
];
