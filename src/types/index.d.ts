import type { Linter } from 'eslint';
import type { defineConfig as eslintDefineConfig } from 'eslint/config';
import type { ExternalPluginEntry, OxlintConfig, OxlintOverride } from 'oxlint';

export type LinterConfigEntry = Omit<Linter.Config, 'files'>;

type LinterConfigRuleEntry =
	| Linter.RuleSeverity
	| [Linter.RuleSeverity, ...unknown[]];

export type LinterConfigRules = Record<string, LinterConfigRuleEntry>;

type InfiniteLinterConfig = Parameters<typeof eslintDefineConfig>[number];

export type StandardConfig = Exclude<InfiniteLinterConfig, unknown[]> & {
	/**
	 * Enable React-specific rules.
	 * @default false
	 */
	react?: boolean;
};

type InfiniteLinterConfigs = [StandardConfig, ...InfiniteLinterConfig[]];

export type StandardConfigArray =
	| InfiniteLinterConfig[]
	| InfiniteLinterConfigs
	| [InfiniteLinterConfigs, ...InfiniteLinterConfig[]];

export type OxlintConfigEntriesOptions = Pick<StandardConfig, 'react'> & {
	/**
	 * Enable stylistic rules.
	 * @default false
	 */
	stylistic?: boolean;
};

export type OxlintConfigOverrideEntry = Pick<OxlintOverride, 'rules'>;

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
	configConfigFiles: OxlintConfigOverrideEntry;
	/**
	 * Optional override entry containing rules that target `*.tsx` files.
	 * Intended for explicit overrides, as `configBase` already includes these
	 * rules when `react` is enabled.
	 */
	configReact: OxlintConfigOverrideEntry;
};

export type OxlintConfigPluginEntry = Exclude<ExternalPluginEntry, string>;
