import type { OxlintConfig } from 'oxlint';
import { defineConfig as standardDefineConfig } from '@standard-config/oxlint';
import oxlintConfigBase from '../../config-base/oxlint.ts';
import oxlintConfigBaseReact from '../../config-react/oxlint.ts';

/**
 * Wrapper around `defineConfig` from `@standard-config/oxlint` that combines
 * Standard Config’s Oxlint and ESLint configs, with optional overrides.
 */
export default function defineOxlintConfig(
	...configs: Parameters<typeof standardDefineConfig>
): OxlintConfig {
	let includeReactConfig = false;

	for (const { react } of configs) {
		if (react !== undefined) {
			includeReactConfig = react;
		}
	}

	return standardDefineConfig(
		includeReactConfig ? oxlintConfigBaseReact : oxlintConfigBase,
		...configs
	);
}
