import type { Config } from 'eslint/config';
import pluginOxlint from 'eslint-plugin-oxlint';
import { defineConfig as eslintDefineConfig } from 'eslint/config';
import configBase from '../config-base/index.ts';
import configConfigFiles from '../config-config-files/index.ts';
import configIgnores from '../config-ignores/index.ts';
import configReact from '../config-react/index.ts';

/**
 * Combine Standard Config with optional additional config.
 */
export default function defineConfig(
	...configs: Parameters<typeof eslintDefineConfig>
): Config[] {
	const configExtension =
		configs.length > 0 ? eslintDefineConfig(...configs) : [];

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
			includeReactConfig(configExtension),
			pluginOxlint.configs['flat/all'],
		],
	});
}

function includeReactConfig(configs: Config[]): Config[] {
	let react: unknown;

	for (const { settings } of configs.toReversed()) {
		if (settings?.react && typeof settings?.react === 'object') {
			react = settings.react;
			break;
		}
	}

	if (!react) {
		return configs;
	}

	return [
		{
			settings: { react },
			...configReact,
		},
		...configs,
	];
}
