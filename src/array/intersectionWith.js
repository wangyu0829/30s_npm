
/**
 * intersectionWith
 * Returns a list of elements that exist in both arrays, using a provided comparator function.
 * 
 */
export const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
