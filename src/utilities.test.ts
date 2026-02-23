import { expect, test } from 'vitest';
import * as exports from './utilities.ts';

test('exposes correct public API', () => {
	expect({ ...exports }).toStrictEqual({
		transformRules: expect.any(Function),
	});
});
