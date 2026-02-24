import type { Linter } from 'eslint';
import type { defineConfig as eslintDefineConfig } from 'eslint/config';

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
