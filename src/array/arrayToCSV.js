
/**
 * arrayToCSV
 * Converts a 2D array to a comma-separated values (CSV) string.
 *
 */

export const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n');
