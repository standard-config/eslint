import type { LinterConfigEntry } from '../types/index.d.ts';
import path from 'node:path';
import { beforeEach, expect, expectTypeOf, test, vi } from 'vitest';

beforeEach(() => {
	vi.resetModules();
});

test('includes the plugin config when `prettier.config.ts` exists', async () => {
	vi.spyOn(process, 'cwd').mockReturnValue(
		path.resolve(import.meta.dirname, '..', '..')
	);

	const { default: config } = await import('./index.ts');

	expectTypeOf(config).toEqualTypeOf<LinterConfigEntry>();
	expect(config).toHaveProperty('rules');
});

test('omits the plugin config when `prettier.config.ts` is missing', async () => {
	vi.spyOn(process, 'cwd').mockReturnValue(
		path.resolve(import.meta.dirname, '..')
	);

	const { default: config } = await import('./index.ts');

	expectTypeOf(config).toEqualTypeOf<LinterConfigEntry>();
	expect(config).toStrictEqual({});
});
