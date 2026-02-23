import { defineConfig } from '@standard-config/oxlint';

export default defineConfig({
	categories: {
		nursery: 'error',
	},
	rules: {
		'typescript/no-deprecated': 'off',
	},
});
