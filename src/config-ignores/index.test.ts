import type { LinterConfigEntry } from '../types/index.d.ts';
import path from 'node:path';
import { beforeEach, expect, expectTypeOf, test, vi } from 'vitest';

beforeEach(() => {
	vi.resetModules();
});

test('includes ignored paths from `.gitignore`', async () => {
	vi.spyOn(process, 'cwd').mockReturnValue(
		path.resolve(import.meta.dirname, '..', '..')
	);

	const { default: config } = await import('./index.ts');

	expectTypeOf(config).toEqualTypeOf<LinterConfigEntry>();
	expect(config).toStrictEqual({
		name: '.gitignore',
		ignores: expect.any(Array),
	});
});

test('omits `.gitignore` paths when `.gitignore` is missing', async () => {
	vi.spyOn(process, 'cwd').mockReturnValue(
		path.resolve(import.meta.dirname, '..')
	);

	const { default: config } = await import('./index.ts');

	expectTypeOf(config).toEqualTypeOf<LinterConfigEntry>();
	expect(config).toStrictEqual({});
});
