import type { OxlintPluginEntry } from './types.d.ts';
import { fileURLToPath } from 'node:url';

/**
 * Resolve an external plugin specifier.
 *
 * @deprecated Not covered by semver.
 */
export default function transformPlugin(
	name: string,
	specifier: string
): OxlintPluginEntry {
	try {
		/* oxlint-disable-next-line eslint/no-param-reassign */
		specifier = fileURLToPath(import.meta.resolve(specifier));
	} catch {}

	return { name, specifier };
}
