import type { Config } from 'eslint/config';
import { defineConfig as _defineConfig } from 'eslint/config';
import baseConfig from '../config/index.ts';
import includeIgnoreFile from '../include-ignore-file/index.ts';

/**
 * Combine Standard Config with optional additional config.
 */
export default function defineConfig(
	...configs: Parameters<typeof _defineConfig>
): Config[] {
	const extensionConfig = configs.length > 0 ? _defineConfig(...configs) : [];

	const ignoreConfig = [
		includeIgnoreFile(),
		{
			name: 'Ignored Paths',
			ignores: ['**/fixtures/**'],
		},
	];

	return _defineConfig({
		name: 'Standard Config',
		files: ['**/*.{ts,tsx,cts,mts}'],
		extends: [ignoreConfig, baseConfig, extensionConfig],
	});
}
