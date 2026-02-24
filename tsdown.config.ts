import { defineConfig } from 'tsdown';

export default defineConfig({
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
	skipNodeModulesBundle: true,
	sourcemap: true,
});
