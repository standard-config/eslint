import type { Config } from 'eslint/config';
import { defineConfig as _defineConfig } from 'eslint/config';
import configBase from '../config/index.ts';
import includeIgnoreFile from '../include-ignore-file/index.ts';
import includeOxlintConfig from '../include-oxlint-config/index.ts';

const configIgnores = [
	includeIgnoreFile(),
	{
		name: 'Ignored Paths',
		ignores: ['**/fixtures/**'],
	},
];

const configOxlint = includeOxlintConfig();

/**
 * Combine Standard Config with optional additional config.
 */
export default function defineConfig(
	...configs: Parameters<typeof _defineConfig>
): Config[] {
	const configExtension = configs.length > 0 ? _defineConfig(...configs) : [];

	return _defineConfig({
		name: 'Standard Config',
		files: ['**/*.{ts,tsx,cts,mts}'],
		extends: [configIgnores, configBase, configExtension, configOxlint],
	});
}
