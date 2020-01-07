
/**
 * join
 * Joins all elements of an array into a string and returns this string. Uses a separator and an end separator.
 *
 */

export const join = (arr, separator = ',', end = separator) =>
  arr.reduce(
    (acc, val, i) =>
      i === arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
          ? acc + val
          : acc + val + separator,
    ''
  );
