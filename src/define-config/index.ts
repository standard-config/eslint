import { defineConfig as _defineConfig } from 'eslint/config';
import config from '../config/index.ts';

/**
 * Combine Standard Config with optional additional config.
 */
export default function defineConfig(
	...configs: Parameters<typeof _defineConfig>
): ReturnType<typeof _defineConfig> {
	return _defineConfig(
		{
			name: 'Standard Config',
			files: ['**/*.{ts,tsx,cts,mts}'],
			extends: [config],
		},
		...configs
	);
}
