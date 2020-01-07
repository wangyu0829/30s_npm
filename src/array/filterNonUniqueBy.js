
/**
 * filterNonUniqueBy
 * Filters out the non-unique values in an array, based on a provided comparator function.
 *
 */
export const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
