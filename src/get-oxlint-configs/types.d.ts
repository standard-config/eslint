import type { OxlintConfig, OxlintOverride } from 'oxlint';
import type { StandardConfig } from '../types/index.d.ts';

export type OxlintOverrideEntry = Pick<OxlintOverride, 'rules'>;

export type OxlintConfigEntriesOptions = Pick<StandardConfig, 'react'> & {
	/**
	 * Enable stylistic rules.
	 * @default true
	 */
	stylistic?: boolean;
};

export type OxlintConfigEntries = {
	/**
	 * Primary config defining base rules and JS plugins shared across all
	 * configs. Meant to be merged with the root config.
	 */
	oxlintConfigBase: OxlintConfig;
	/**
	 * Optional override entry containing stylistic rules that target config
	 * files. Intended for explicit overrides, as `oxlintConfigBase` already
	 * includes these rules when `stylistic` is enabled (on by default).
	 */
	oxlintConfigConfigFiles: OxlintOverrideEntry;
	/**
	 * Optional override entry containing rules that target `*.tsx` files.
	 * Intended for explicit overrides, as `oxlintConfigBase` already includes
	 * these rules when `react` is enabled.
	 */
	oxlintConfigReact: OxlintOverrideEntry;
};
