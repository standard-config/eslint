import type { ExternalPluginEntry, OxlintConfig, OxlintOverride } from 'oxlint';

export type OxlintOverrideEntry = Pick<OxlintOverride, 'rules'>;

export type OxlintPluginEntry = Exclude<ExternalPluginEntry, string>;
