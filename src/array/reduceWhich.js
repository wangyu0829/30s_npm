
/**
 * reduceWhich
 * Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule.
 *
 */
export const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
