
/**
 * takeRightWhile
 * Removes elements from the end of an array until the passed function returns true. Returns the removed elements.
 *
 */
export const takeRightWhile = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]), []);
