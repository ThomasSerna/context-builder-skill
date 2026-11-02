# Build Plan

## F01 — Portable skill package

Deliver one self-contained `context-builder` skill with standard frontmatter, direct reference links and Codex invocation metadata. Acceptance: the skill validates, the full directory is installable and references resolve from an installed copy.

## F02 — Interview and approval

Inspect the project, interview in relevant rounds, distinguish evidence from decisions and obtain approval of a complete synthesis before writing. Acceptance: all applicable decisions are covered, no files are written before approval, and a material change requires fresh approval.

## F03 — Context generation and maintenance

Support basic/complete profiles and independent UI selection, preserve existing user content, and maintain the selected reading list and Claude import. Acceptance: each combination creates the intended files in order; re-runs are safe; feature IDs, UI registry and tracker reflect actual project state.

## F04 — User documentation and license

Explain installation, explicit invocation, output and limitations; document this repository's own context and include the MIT license. Acceptance: instructions match the shipped skill and current official sources; project instructions and context are consistent.

## F05 — Behavioral verification and release preparation

Validate the skill and run feasible behavioral and installation checks, recording evidence and host limitations. Review the documentation and group changes into coherent `feat:` commits. Acceptance: results distinguish static checks from real agent sessions, and the Git history and working tree accurately reflect completed work.
