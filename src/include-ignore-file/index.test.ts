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

	const includeIgnoreFile = await import('./index.ts').then(
		(module) => module.default
	);

	const result = includeIgnoreFile();

	expectTypeOf(result).toEqualTypeOf<Linter.Config>();
	expect(result).toStrictEqual({
		name: '.gitignore',
		ignores: expect.any(Array),
	});
});

test('omits ignored paths when `.gitignore` is missing', async () => {
	vi.spyOn(process, 'cwd').mockReturnValue(
		path.resolve(import.meta.dirname, '..')
	);

	const includeIgnoreFile = await import('./index.ts').then(
		(module) => module.default
	);

	const result = includeIgnoreFile();

	expectTypeOf(result).toEqualTypeOf<Linter.Config>();
	expect(result).toStrictEqual({});
});
