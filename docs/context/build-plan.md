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

## F06 — Collaborative interview

Help users clarify vague ideas, evaluate suitable alternatives and make informed decisions. Challenge concrete conflicts while respecting viable user preferences. Acceptance: the interview explains recommendations and tradeoffs, distinguishes proposals from approved decisions, resolves blockers and keeps the existing synthesis approval boundary.

## F07 — Sufficient and consistent context

Define project-appropriate document completion criteria and cross-document checks. Acceptance: the selected documents contain actionable detail supported by evidence or approved decisions, with consistent scope, flows, UI decisions and feature IDs.

## F08 — Portable examples

Provide original, credited examples that illustrate useful depth without prescribing a particular project or stack. Acceptance: examples are bundled with the skill, reachable by relative links and usable offline.

## F09 — Evaluation of the enhanced workflow

Evaluate collaborative interviews, document sufficiency, consistency and existing safety boundaries. Acceptance: scenarios record observable results, preserve evidence and distinguish instruction-level checks from native host execution.

## F10 — Shareable Skills CLI installation

Document installation, update and removal through the existing Skills CLI and check the bundled skill in isolated installs. Acceptance: the published repository can be discovered, local installs for Codex and Claude Code preserve all bundled files and relative inline Markdown file links, checks pass locally on Ubuntu and Windows, and CI is configured without claiming native host invocation.
