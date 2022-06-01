/**
 * @author Suryapratap Singh Suryavanshi
 * @date 31/05/2022
 * @summary This file contains all the typescript declaration related to javascript methods.
 */

/**
 * Generate UUID1 and UUID-4 or Token type unique value for your various works.
 * @param {String} param0 pass function type or uuid type.
 * @param {String} param1 pass the delimiter between UUID.
 * @param {Number} param2 pass the size of the UUID, only work on token type.
 * @return {String} Return a unique token or UUID value.
 */
export function soleToken({ type: string, delimiter: string, size: number }): string;
