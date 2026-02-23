import { isAbsolute } from 'node:path';
import { expect, test } from 'vitest';
import transformPlugin from './index.ts';

const PLUGINS = [
	'@stylistic/eslint-plugin',
	'eslint-plugin-perfectionist',
	'eslint-plugin-react',
	'eslint-plugin-react-hooks',
	'eslint-plugin-react-naming-convention',
	'eslint-plugin-react-x',
];

test.each(PLUGINS)('resolves `%s`', (plugin) => {
	const result = transformPlugin('plugin', plugin);

	expect(result).toHaveProperty('name', 'plugin');
	expect(result).toHaveProperty('specifier', expect.any(String));

	const { specifier } = result;

	expect(specifier).toContain(plugin);
	expect(specifier).not.toBe(plugin);
	expect(isAbsolute(specifier)).toBe(true);
});

test('handles incorrect values', () => {
	const result = transformPlugin('plugin', 'nonexistent-plugin');

	expect(result).toHaveProperty('name', 'plugin');
	expect(result).toHaveProperty('specifier', 'nonexistent-plugin');
});
