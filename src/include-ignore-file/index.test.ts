import type { Linter } from 'eslint';
import path from 'node:path';
import { beforeEach, expect, expectTypeOf, test, vi } from 'vitest';

beforeEach(() => {
	vi.resetModules();
});

test('includes ignored paths from `.gitignore`', async () => {
	vi.spyOn(process, 'cwd').mockReturnValue(
		path.resolve(import.meta.dirname, '..', '..')
	);

	let prependIgnoreFile = await import('./index.ts').then(
		(module) => module.default
	);

	let result = prependIgnoreFile([]);

	expectTypeOf(result).toEqualTypeOf<Linter.Config[]>();
	expect(result).toBeInstanceOf(Array);
	expect(result).toHaveLength(1);
});

test('omits ignored paths when `.gitignore` is missing', async () => {
	vi.spyOn(process, 'cwd').mockReturnValue(
		path.resolve(import.meta.dirname, '..')
	);

	const prependIgnoreFile = await import('./index.ts').then(
		(module) => module.default
	);

	const result = prependIgnoreFile([]);

	expectTypeOf(result).toEqualTypeOf<Linter.Config[]>();
	expect(result).toBeInstanceOf(Array);
	expect(result).toHaveLength(0);
});
