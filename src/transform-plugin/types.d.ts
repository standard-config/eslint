import type { ExternalPluginEntry } from 'oxlint';

export type OxlintPluginEntry = Exclude<ExternalPluginEntry, string>;
