import type { ExternalPluginEntry, OxlintConfig, OxlintOverride } from 'oxlint';
import type { StandardConfigOptions } from './common.d.ts';

export type OxlintOverrideEntry = Pick<OxlintOverride, 'rules'>;

export type OxlintPluginEntry = Exclude<ExternalPluginEntry, string>;

export type StandardConfig = OxlintConfig & StandardConfigOptions;
