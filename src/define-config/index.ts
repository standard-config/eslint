import type { Config } from 'eslint/config';
import type { StandardConfig, StandardConfigArray } from '../types/index.d.ts';
import { defineConfig as eslintDefineConfig } from 'eslint/config';
import configBase from '../config-base/index.ts';
import configConfigFiles from '../config-config-files/index.ts';
import configIgnores from '../config-ignores/index.ts';
import configReact from '../config-react/index.ts';

/**
 * Combine Standard Config with optional additional config.
 */
export default function defineConfig(
	...configs: StandardConfigArray
): Config[] {
	return eslintDefineConfig({
		name: 'Standard Config',
		files: ['**/*.{ts,tsx,cts,mts}'],
		extends: [
			configIgnores,
			configBase,
			{
				files: ['**/*.config.{ts,cts,mts}'],
				...configConfigFiles,
			},
			...normalizeExtensionConfigs(configs),
		],
	});
}

function normalizeExtensionConfigs(configs: StandardConfigArray) {
	const configArray = configs.flat();
	const extensions: Array<Config | Config[]> = [];

	if (configArray.length === 0) {
		return extensions;
	}

	if ((configArray[0] as StandardConfig).react) {
		extensions.push(configReact);
	}

	extensions.push(
		eslintDefineConfig(
			// Ensure `react` doesn’t break the expected config structure
			configArray.map((configEntry) => {
				if (Array.isArray(configEntry)) {
					return configEntry;
				}

				/* oxlint-disable-next-line eslint/no-unused-vars */
				const { react, ...config } = configEntry as StandardConfig;
				return config;
			})
		)
	);

	return extensions;
}
