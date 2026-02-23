import type { Linter } from 'eslint';
import type { LinterConfigRules } from '../types/index.d.ts';

/**
 * Modify a set of ESLint rules.
 *
 * @deprecated Not covered by semver.
 */
export default function transformRules(
	rules: Linter.Config['rules'],
	options: {
		omit?: ReadonlyArray<string>;
		prefix?: string;
		severity?: Linter.StringSeverity;
	}
): LinterConfigRules {
	if (!rules) {
		return {};
	}

	const { omit, prefix, severity } = options;
	const omittedRules = new Set(omit);

	const transformedRules: LinterConfigRules = {};

	for (const [ruleName, ruleConfig] of Object.entries(rules)) {
		if (omittedRules.has(ruleName)) {
			continue;
		}

		if (!Array.isArray(ruleConfig)) {
			transformedRules[ruleName] = severity ?? ruleConfig ?? 'off';
			continue;
		}

		const [ruleSeverity, ...ruleOptions] = ruleConfig;

		transformedRules[ruleName] = [severity ?? ruleSeverity, ...ruleOptions];
	}

	return typeof prefix === 'string'
		? prefixRules(transformedRules, prefix)
		: transformedRules;
}

function prefixRules(rules: LinterConfigRules, prefix: string) {
	const prefixedRules: LinterConfigRules = {};

	for (const [ruleName, ruleConfig] of Object.entries(rules)) {
		const name = ruleName.replace(/^.*?\//, '');

		prefixedRules[`${prefix}/${name}`] = ruleConfig;
	}

	return prefixedRules;
}
