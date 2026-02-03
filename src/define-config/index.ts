import type { Config } from 'eslint/config';
import pluginOxlint from 'eslint-plugin-oxlint';
import { defineConfig as eslintDefineConfig } from 'eslint/config';
import configBase from '../config-base/index.ts';
import configFormattingConfigFiles from '../config-formatting-config-files/index.ts';
import configFormattingReact from '../config-formatting-react/index.ts';
import configFormatting from '../config-formatting/index.ts';
import configIgnores from '../config-ignores/index.ts';
import configPrettier from '../config-prettier/index.ts';
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
			configFormatting,
			{
				files: ['**/*.config.{ts,cts,mts}'],
				...configFormattingConfigFiles,
			},
			includeReactConfig(configExtension),
			pluginOxlint.configs['flat/all'],
			configPrettier,
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
		{
			files: ['**/*.tsx'],
			...configFormattingReact,
		},
		...configs,
	];
}
