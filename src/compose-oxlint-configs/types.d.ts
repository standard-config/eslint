import type { OxlintConfig, OxlintOverride } from 'oxlint';
import type { StandardConfig } from '../types/index.d.ts';

export type OxlintOverrideEntry = Pick<OxlintOverride, 'rules'>;

export type OxlintConfigEntriesOptions = Pick<StandardConfig, 'react'> & {
	/**
	 * Enable stylistic rules.
	 * @default false
	 */
	stylistic?: boolean;
};

export type OxlintConfigEntries = {
	/**
	 * Primary config defining base rules and JS plugins shared across all
	 * configs. Meant to be merged with the root config.
	 */
	configBase: OxlintConfig;
	/**
	 * Optional override entry containing stylistic rules that target config
	 * files. Intended for explicit overrides, as `configBase` already includes
	 * these rules when `stylistic` is enabled.
	 */
	configConfigFiles: OxlintOverrideEntry;
	/**
	 * Optional override entry containing rules that target `*.tsx` files.
	 * Intended for explicit overrides, as `configBase` already includes these
	 * rules when `react` is enabled.
	 */
	configReact: OxlintOverrideEntry;
};
