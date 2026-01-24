import type { Linter } from 'eslint';
import path from 'node:path';
import { beforeEach, expect, expectTypeOf, test, vi } from 'vitest';

beforeEach(() => {
	vi.resetModules();
});

test('includes the plugin when `.oxlintrc.json` exists', async () => {
	vi.spyOn(process, 'cwd').mockReturnValue(
		path.resolve(import.meta.dirname, '..', '..')
	);

	const includeOxlintConfig = await import('./index.ts').then(
		(module) => module.default
	);

	const result = includeOxlintConfig();

	expectTypeOf(result).toEqualTypeOf<Linter.Config[]>();
	expect(result).toBeInstanceOf(Array);
	expect(result.length).toBeGreaterThan(0);
});

test('omits the plugin when `.oxlintrc.json` is missing', async () => {
	vi.spyOn(process, 'cwd').mockReturnValue(
		path.resolve(import.meta.dirname, '..')
	);

	const includeOxlintConfig = await import('./index.ts').then(
		(module) => module.default
	);

	const result = includeOxlintConfig();

	expectTypeOf(result).toEqualTypeOf<Linter.Config[]>();
	expect(result).toBeInstanceOf(Array);
	expect(result).toHaveLength(0);
});
