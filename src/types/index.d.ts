import type { Linter } from 'eslint';
import type { defineConfig as eslintDefineConfig } from 'eslint/config';

export type LinterConfigEntry = Omit<Linter.Config, 'files'>;

type InfiniteLinterConfig = Parameters<typeof eslintDefineConfig>[number];

export type StandardConfig = Exclude<
	InfiniteLinterConfig,
	ReadonlyArray<unknown>
> & {
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
