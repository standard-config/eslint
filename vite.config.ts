import { defineConfig } from 'vite-plus';
import {
	defineOxlintConfig,
	oxlintConfigConfigFiles,
} from './src/utilities.ts';

export default defineConfig({
	test: {
		setupFiles: [
			/* prettier-ignore */
			'vitest.setup.ts',
		],
		typecheck: {
			enabled: true,
		},
	},
	lint: defineOxlintConfig({
		rules: {
			'typescript/no-deprecated': 'off',
		},
		overrides: [
			{
				files: [
					/* prettier-ignore */
					'src/config-*/index.ts',
					'src/config-*/rules-*.ts',
				],
				...oxlintConfigConfigFiles,
			},
		],
	}),
	pack: {
		deps: {
			skipNodeModulesBundle: true,
		},
		dts: {
			sourcemap: true,
		},
		entry: [
			/* prettier-ignore */
			'src/index.ts',
			'src/utilities.ts',
		],
		failOnWarn: true,
		publint: true,
		sourcemap: true,
	},
	staged: {
		'*': [
			() => 'pnpm install --ignore-scripts',
			'prettier --ignore-unknown --write',
			() => 'pnpm prepack',
		],
	},
});
