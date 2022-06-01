/**
 * @author Suryapratap Singh Suryavanshi
 * @date 31/05/2022
 * @summary This file contains main hierarchy of the module.
 */

// A formatter function format the uuid delimiter.
let formate = (uuidArray, delimiter) => {
    return uuidArray.join(delimiter);
}

// Generate version-1 UUID.
const uuid1 = require('./src/uuid1').getUUID1;

// Generate version-4 UUID.
const uuid4 = require('./src/uuid4').uuid4;

/**
 * Generate UUID1 and UUID-4 or Token type unique value for your various works.
 * @param {String} param0 pass function type or uuid type.
 * @param {String} param1 pass the delimiter between UUID.
 * @param {Number} param2 pass the size of the UUID, only work on token type.
 * @return {String} Return a unique token or UUID value.
 */
const soleToken = ({ type = 'uuid4', delimiter = '-', size = 32 }) => {
	if(size < 32) {
		return formate(uuid4(), '').slice(0, size);
	}else if(size === 32) {
		switch(type) {
			case 'uuid1':
				return formate(uuid1(), delimiter);
			case 'uuid4':
				return formate(uuid4(), delimiter);
			// Generate unofficial UUID or token.
			case 'token':
				return formate(uuid4(), '')
		}
	}else {
		throw 'The size of the UUID or token are not supported!';
	}
}

module.exports = {
	soleToken
}
