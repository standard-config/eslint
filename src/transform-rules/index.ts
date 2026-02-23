import type { Linter } from 'eslint';
import type { LinterConfigRules } from '../types/index.js';

/**
 * Modify a set of ESLint rules.
 *
 * @deprecated Not covered by semver.
 */
export default function transformRules(
	rules: LinterConfigRules,
	options: {
		omit?: ReadonlyArray<string>;
		severity?: Linter.StringSeverity;
	}
): LinterConfigRules {
	const omittedRules = new Set(options.omit);

	const transformedRules: LinterConfigRules = {};

	for (const [ruleName, ruleConfig] of Object.entries(rules)) {
		if (omittedRules.has(ruleName)) {
			continue;
		}

		if (!Array.isArray(ruleConfig)) {
			transformedRules[ruleName] = options.severity ?? ruleConfig;
			continue;
		}

		const [ruleSeverity, ...ruleOptions] = ruleConfig;

		transformedRules[ruleName] = [
			options.severity ?? ruleSeverity,
			...ruleOptions,
		];
	}

	return transformedRules;
}
