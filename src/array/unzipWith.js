
/**
 * unzipWith
 * Creates an array of elements, ungrouping the elements in an array produced by zip and applying the provided function.
 *
 */
export const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map(x => x.length))
      }).map(x => [])
    )
    .map(val => fn(...val));
