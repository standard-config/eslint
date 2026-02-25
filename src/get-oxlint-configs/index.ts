import type { OxlintConfig } from 'oxlint';
import type {
	OxlintConfigEntries,
	OxlintConfigEntriesOptions,
	OxlintOverrideEntry,
} from './types.d.ts';
import configBaseRulesCore from '../config-base/rules-core.ts';
import configBaseRulesPerfectionist from '../config-base/rules-perfectionist.ts';
import configBaseRulesStylistic from '../config-base/rules-stylistic.ts';
import configConfigFilesRulesPerfectionist from '../config-config-files/rules-perfectionist.ts';
import configReactRulesPerfectionist from '../config-react/rules-perfectionist.ts';
import configReactRulesReactHooks from '../config-react/rules-react-hooks.ts';
import configReactRulesReactNamingConvention from '../config-react/rules-react-naming-convention.ts';
import configReactRulesReactX from '../config-react/rules-react-x.ts';
import configReactRulesReact from '../config-react/rules-react.ts';
import transformPlugin from '../transform-plugin/index.ts';
import transformRules from '../transform-rules/index.ts';

const PREFIX_ESLINT = 'eslint';
const PREFIX_PERFECTIONIST = 'perfectionist';
const PREFIX_REACT = 'react-js';
const PREFIX_REACT_HOOKS = 'react-hooks-js';
const PREFIX_REACT_NAMING_CONVENTION = 'react-naming-convention';
const PREFIX_REACT_X = 'react-x';
const PREFIX_STYLISTIC = 'stylistic';

/**
 * Translate Standard Config’s own ESLint config to Oxlint config entries.
 * Relies on Oxlint’s experimental `jsPlugins` support.
 */
export default function getOxlintConfigs({
	react = false,
	stylistic = true,
}: OxlintConfigEntriesOptions = {}): OxlintConfigEntries {
	const configBase: OxlintConfig = {
		rules: transformRules(configBaseRulesCore, {
			prefix: PREFIX_ESLINT,
		}),
	};

	const configConfigFiles: OxlintOverrideEntry = {};
	const configReact: OxlintOverrideEntry = {};

	if (stylistic) {
		configBase.jsPlugins = [
			transformPlugin(PREFIX_STYLISTIC, '@stylistic/eslint-plugin'),
			transformPlugin(
				PREFIX_PERFECTIONIST,
				'eslint-plugin-perfectionist'
			),
		];

		configBase.rules = {
			...configBase.rules,
			...transformRules(configBaseRulesPerfectionist, {
				prefix: PREFIX_PERFECTIONIST,
				omit: [
					// Crashes Oxlint at the moment
					'perfectionist/sort-classes',
				],
			}),
			...transformRules(configBaseRulesStylistic, {
				prefix: PREFIX_STYLISTIC,
			}),
		};

		configConfigFiles.rules = {
			...transformRules(configConfigFilesRulesPerfectionist, {
				prefix: PREFIX_PERFECTIONIST,
			}),
		};

		configBase.overrides = [
			{
				files: ['**/*.config.{ts,cts,mts}'],
				...configConfigFiles,
			},
		];
	}

	if (react) {
		configBase.settings = {
			react: {
				// Oxlint doesn’t support `detect`
				version: '19.2.4',
			},
		};

		configBase.jsPlugins = [
			...(configBase.jsPlugins ?? []),
			transformPlugin(PREFIX_REACT, 'eslint-plugin-react'),
			transformPlugin(PREFIX_REACT_HOOKS, 'eslint-plugin-react-hooks'),
			transformPlugin(
				PREFIX_REACT_NAMING_CONVENTION,
				'eslint-plugin-react-naming-convention'
			),
			transformPlugin(PREFIX_REACT_X, 'eslint-plugin-react-x'),
		];

		configReact.rules = {
			...transformRules(configReactRulesReact, {
				prefix: PREFIX_REACT,
			}),
			...transformRules(configReactRulesReactHooks, {
				prefix: PREFIX_REACT_HOOKS,
			}),
			...transformRules(configReactRulesReactNamingConvention, {
				prefix: PREFIX_REACT_NAMING_CONVENTION,
			}),
			...transformRules(configReactRulesReactX, {
				prefix: PREFIX_REACT_X,
				omit: [
					// Oxlint doesn’t support type-aware rules
					'react-x/no-implicit-key',
					'react-x/no-leaked-conditional-rendering',
				],
			}),
		};

		if (stylistic) {
			configReact.rules = {
				...configReact.rules,
				...transformRules(configReactRulesPerfectionist, {
					prefix: PREFIX_PERFECTIONIST,
				}),
			};
		}

		configBase.overrides = [
			...(configBase.overrides ?? []),
			{
				files: ['**/*.tsx'],
				...configReact,
			},
		];
	}

	return {
		configBase,
		configConfigFiles,
		configReact,
	};
}
