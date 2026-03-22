import type { OxlintConfig } from 'oxlint';
import type { StandardConfigOptions } from '../types/common.d.ts';
import type { OxlintPluginEntry } from '../types/oxlint.d.ts';
import clone from '../clone/index.ts';
import configBase from '../config-base/oxlint.ts';

/**
 * Translate Standard Config’s own ESLint config to an Oxlint config entry.
 * Relies on Oxlint’s experimental `jsPlugins` support.
 */
export default function createOxlintConfig(
	options: StandardConfigOptions = {}
): OxlintConfig {
	const config = clone(configBase);

	if (!options.react) {
		delete config.settings;

		config.jsPlugins = (config.jsPlugins as OxlintPluginEntry[]).filter(
			({ name }) => !name.startsWith('react')
		);

		config.overrides = config.overrides!.filter(
			({ files }) => !files.includes('**/*.tsx')
		);
	}

	return config;
}
