import { expect, test } from 'vitest';
import * as exports from './utilities.ts';

test('exposes correct public API', () => {
	expect({ ...exports }).toStrictEqual({
		getOxlintConfigs: expect.any(Function),
		transformPlugin: expect.any(Function),
		transformRules: expect.any(Function),
	});
});
