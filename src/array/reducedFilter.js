
/**
 * reducedFilter
 * Filter an array of objects based on a condition while also filtering out unspecified keys.
 *
 */

export const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {}));
