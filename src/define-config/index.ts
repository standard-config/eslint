import type { Config } from 'eslint/config';
import type { StandardConfigArray } from '../types/index.d.ts';
import { defineConfig as eslintDefineConfig } from 'eslint/config';
import configBase from '../config-base/index.ts';
import configConfigFiles from '../config-config-files/index.ts';
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

	if (includeReactConfig) {
		extensionConfigs.unshift({
			files: ['**/*.tsx'],
			...configReact,
		});
	}

	return extensionConfigs;
}
