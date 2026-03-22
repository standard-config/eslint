import { expect, test } from 'vitest';
import * as exports from './utilities.ts';

test('exposes correct public API', () => {
	expect({ ...exports }).toStrictEqual({
		oxlintConfigBase: expect.any(Object),
		oxlintConfigBaseReact: expect.any(Object),
		oxlintConfigConfigFiles: expect.any(Object),
		transformPlugin: expect.any(Function),
		transformRules: expect.any(Function),
	});
});
