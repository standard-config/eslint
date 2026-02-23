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
	publint: true,
	sourcemap: true,
});
