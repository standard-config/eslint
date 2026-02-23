import { expect, test } from 'vitest';
import * as exports from './utilities.ts';

test('exposes correct public API', () => {
	expect({ ...exports }).toStrictEqual({
		composeOxlintConfigs: expect.any(Function),
		transformPlugin: expect.any(Function),
		transformRules: expect.any(Function),
	});
});
