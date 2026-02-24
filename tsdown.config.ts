import { defineConfig } from 'tsdown';

export default defineConfig({
	dts: {
		sourcemap: true,
	},
	entry: [
		/* prettier-ignore */
		'./src/index.ts',
		'./src/utilities.ts',
	],
	external: ['oxlint'],
	failOnWarn: true,
	inlineOnly: [],
	publint: true,
	sourcemap: true,
});
