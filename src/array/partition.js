
/**
 * partition
 * Groups the elements into two arrays, depending on the provided function's truthiness for each element.
 *
 */
export const partition = (arr, fn) =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
