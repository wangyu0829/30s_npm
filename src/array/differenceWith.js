
/**
 * differenceWith
 * Filters out all values from an array for which the comparator function does not return true.
 * 
 */
export const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
