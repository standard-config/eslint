---
on:
    schedule: weekly
    workflow_dispatch:

engine:
    id: copilot
    model: gpt-5.3-codex

permissions:
    actions: read
    contents: read
    pull-requests: read

safe-outputs:
    create-pull-request:
        base-branch: main
        draft: false
        fallback-as-issue: false
---

## Goal

Detect ESLint rules enabled in this repository that are now covered by the local Oxlint install, then open one pull request per rule to remove that ESLint rule.

## Hard Constraints

- Never commit directly to `main`.
- Never push to `main`.
- Use only local data from this repository and installed packages.
- Keep each pull request minimal and scoped to a single rule, processed from a clean branch state.

## Detection

1. Collect currently enabled ESLint rules from `src/config-*/index.ts`.

2. List local Oxlint rules with `pnpm oxlint --rules`.

3. Compare the enabled ESLint rules against the Oxlint rule list. Rule names don’t always match.

4. A candidate rule is an ESLint rule enabled in this repo that now exists in Oxlint.
    - If no candidates are found, exit successfully without creating branches, commits, or pull requests.
    - Evaluate all candidates.
    - If safe output limits prevent creating all pull requests in one run, defer the remaining rules to subsequent scheduled or manual runs.

## Pull Request Workflow

1. Set the pull request title to:

    ```
    Disable `plugin/rule-name`
    ```

    Use backticks around the rule name. For a core ESLint rule, use `eslint/rule-name`.

2. Before making any changes, check existing pull requests (open and closed).
    - If a pull request with the exact same title already exists, skip that rule.

3. Create a dedicated branch for the rule: `automation/disable-<plugin-rule-name>`.

4. Remove the rule from every config location where it appears.

5. Update any tests and snapshots impacted by that single change.

6. Commit only what is required for that rule.

7. Open a pull request with:
    - The established title.
    - The equivalent Oxlint configuration.
    - Evidence from local `pnpm oxlint --rules` output showing the replacement exists.
