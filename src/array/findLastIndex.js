
/**
 * findLastIndex
 * Returns the index of the last element for which the provided function returns a truthy value.
 *
 */

export const findLastIndex = (arr, fn) =>
  (arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop() || [-1])[0];
