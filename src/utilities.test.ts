import { expect, test } from 'vitest';
import * as exports from './utilities.ts';

test('exposes correct public API', () => {
	expect({ ...exports }).toStrictEqual({
		createOxlintConfig: expect.any(Function),
		oxlintConfigBase: expect.any(Object),
		oxlintConfigConfigFiles: expect.any(Object),
		oxlintConfigReact: expect.any(Object),
		transformPlugin: expect.any(Function),
		transformRules: expect.any(Function),
	});
});
