import type { Config } from 'eslint/config';
import type { StandardConfigArray } from '../types/eslint.d.ts';
import { defineConfig as eslintDefineConfig } from 'eslint/config';
import configBase from '../config-base/eslint.ts';
import configConfigFiles from '../config-config-files/eslint.ts';
import configReact from '../config-react/eslint.ts';
import configTestFiles from '../config-test-files/eslint.ts';

/**
 * Combine Standard Config with optional additional config.
 */
export default function defineConfig(
	...configs: StandardConfigArray
): Config[] {
	const { extensionConfigs, includeReactConfig } =
		normalizeExtensionConfigs(configs);

	return eslintDefineConfig([
		{
			name: 'Standard Config',
			extends: [
				{
					files: [
						/* prettier-ignore */
						'**/*.{ts,tsx,cts,mts}',
					],
					...configBase,
				},
				includeReactConfig
					? {
							files: [
								/* prettier-ignore */
								'**/*.tsx',
							],
							...configReact,
						}
					: [],
				{
					files: [
						/* prettier-ignore */
						'**/*.test.{ts,tsx,cts,mts}',
						'**/*.test-d.{ts,cts,mts}',
					],
					...configTestFiles,
				},
				{
					files: [
						/* prettier-ignore */
						'**/*.config.{ts,cts,mts}',
					],
					...configConfigFiles,
				},
			],
		},
		extensionConfigs.length > 0
			? {
					name: 'Standard Config Extensions',
					files: [
						/* prettier-ignore */
						'**/*.{ts,tsx,cts,mts}',
					],
					extends: extensionConfigs,
				}
			: [],
	]);
}

function normalizeExtensionConfigs(configs: StandardConfigArray): {
	extensionConfigs: Array<Config | Config[]>;
	includeReactConfig: boolean;
} {
	const extensionConfigs: Array<Config | Config[]> = [];
	let includeReactConfig = false;

	for (const config of configs.flat()) {
		const { react, ...otherConfig } = config;

		if (Object.keys(otherConfig).length > 0) {
			extensionConfigs.push(eslintDefineConfig(otherConfig));
		}

		if (react !== undefined) {
			includeReactConfig = react;
		}
	}

	return {
		extensionConfigs,
		includeReactConfig,
	};
}
