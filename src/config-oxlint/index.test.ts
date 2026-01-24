import type { Linter } from 'eslint';
import path from 'node:path';
import { beforeEach, expect, expectTypeOf, test, vi } from 'vitest';

beforeEach(() => {
	vi.resetModules();
});

test('includes the plugin config when `.oxlintrc.json` exists', async () => {
	vi.spyOn(process, 'cwd').mockReturnValue(
		path.resolve(import.meta.dirname, '..', '..')
	);

	const { default: config } = await import('./index.ts');

	expectTypeOf(config).toEqualTypeOf<Linter.Config[]>();
	expect(config).toBeInstanceOf(Array);
	expect(config.length).toBeGreaterThan(0);
});

test('omits the plugin config when `.oxlintrc.json` is missing', async () => {
	vi.spyOn(process, 'cwd').mockReturnValue(
		path.resolve(import.meta.dirname, '..')
	);

	const { default: config } = await import('./index.ts');

	expectTypeOf(config).toEqualTypeOf<Linter.Config[]>();
	expect(config).toStrictEqual([]);
});
