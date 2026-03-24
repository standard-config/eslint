import type { OxlintConfig } from 'oxlint';
import type { StandardConfig } from '../../types/oxlint.d.ts';
import oxlintConfigBase from '../../config-base/oxlint.ts';
import oxlintConfigBaseReact from '../../config-react/oxlint.ts';

/* oxlint-disable-next-line typescript/consistent-type-imports */
let oxlintConfig: typeof import('@standard-config/oxlint') | undefined;

try {
	oxlintConfig = await import('@standard-config/oxlint');
} catch {}

/**
 * Wrapper around `defineConfig` from `@standard-config/oxlint` that combines
 * Standard Config’s Oxlint and ESLint configs, with optional overrides.
 */
export default function defineOxlintConfig(
	...configs: StandardConfig[]
): OxlintConfig {
	const { defineConfig } = oxlintConfig ?? {};

	if (typeof defineConfig !== 'function') {
		/* oxlint-disable-next-line eslint-plugin-unicorn/prefer-type-error */
		throw new Error(
			'Standard Config error: `@standard-config/oxlint` is missing'
		);
	}

	let includeReactConfig = false;

	for (const { react } of configs) {
		if (react !== undefined) {
			includeReactConfig = react;
		}
	}

	return defineConfig(
		includeReactConfig ? oxlintConfigBaseReact : oxlintConfigBase,
		...configs
	);
}
