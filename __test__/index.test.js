/**
 * @author Suryapratap Singh Suryavanshi
 * @date 31/05/2022
 * @summary This file contains all the test related to module
 */

const { networkInterfaces } = require('os');
const { soleToken } = require('../index');

// Test UUID-1
test("Test: UUID-1: normal use case", () => {
	expect(soleToken({ type: 'uuid1' }).length).toEqual(36);
});

test("Test: UUID-1: with `_` delimiter." , () => {
	expect((soleToken({ type: 'uuid1', delimiter: '_' }).match(/_/g) || []).length).toEqual(4);
});

test("Test: UUID-1: test size params auto use token method", () => {
	expect(soleToken({ type: 'uuid1', size: 8 }).length).toEqual(8);
});

test("Test: UUID-1: test mac address of UUID-1", () => {
	const node_id = networkInterfaces();
	expect(soleToken({ type: 'uuid1' }).slice(24, 36)).toBe(node_id['vEthernet (Default Switch)'][0].mac.replace(/:/g, ''));
});

// Test UUID-2
test("Test: UUID-4: normal use case", () => {
	expect(soleToken({ type: 'uuid4' }).length).toEqual(36);
});

test("Test: UUID-4: test mac address of UUID-1", () => {
	const node_id = networkInterfaces();
	expect(soleToken({ type: 'uuid4' }).slice(24, 36)).not.toBe(node_id['vEthernet (Default Switch)'][0].mac.replace(/:/g, ''));
});

// Test Token
test("Test: Tokne: normal use case", () => {
	expect(soleToken({ type: 'token' }).length).toEqual(32);
});

test("Test: Tokne: with size params", () => {
	expect(soleToken({ type: 'token', size: 15 }).length).toEqual(15);
});
