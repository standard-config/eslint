import type { Linter } from 'eslint';
import type { defineConfig as eslintDefineConfig } from 'eslint/config';
import type { StandardConfigOptions } from './common.d.ts';

export type LinterConfigEntry = Omit<Linter.Config, 'files'>;

type LinterConfigRuleEntry =
	| Linter.RuleSeverity
	| [Linter.RuleSeverity, ...unknown[]];

export type LinterConfigRules = Record<string, LinterConfigRuleEntry>;

type InfiniteLinterConfig = Parameters<typeof eslintDefineConfig>[number];

export type StandardConfig = Exclude<InfiniteLinterConfig, unknown[]> &
	StandardConfigOptions;

export type StandardConfigArray = Array<StandardConfig | StandardConfig[]>;
