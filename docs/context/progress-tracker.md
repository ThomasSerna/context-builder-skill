# Progress Tracker

Update this file after completing a feature. Keep feature IDs aligned with `build-plan.md`; record observed results and remaining work rather than assuming completion.

## Current status

The former profile workflow and its examples were evaluated at instruction level; those results do not validate the new staged workflow. Skills CLI installation checks passed locally on Windows and Ubuntu via WSL. F11 is implemented with static checks; technical and UI stage implementation and staged behavioral evaluation remain pending. See `tests/scenarios.md` for evidence and limitations.

## Features

| ID | Status | Evidence or remaining work |
| --- | --- | --- |
| F01 | Verified | A manual isolated installation matched all five source files; the validator, metadata and bundled links passed. |
| F02 | Evaluated | Simulated interviews and material changes at approval were checked at instruction level. |
| F03 | Evaluated | Four profile/UI combinations and an existing-project repeat run were checked; the later UI clarification had a targeted follow-up. |
| F04 | Complete | README, license, project context and attribution were reviewed and updated. |
| F05 | Evaluated | Scoped package, installation and behavioral checks are recorded; native host invocation remains untested. |
| F06 | Evaluated | Novice and experienced-user interviews exercised recommendations, constructive challenges and confirmed decisions. |
| F07 | Evaluated | Coverage and consistency were reviewed independently; the loading-state clarification was checked in a targeted follow-up. |
| F08 | Verified | Original, credited examples cover nine document types and are included in the verified isolated copy. |
| F09 | Complete (scoped) | The matrix, paired comparison and targeted follow-up are recorded with their evidence and limitations. |
| F10 | Verified locally | Skills CLI 1.7.5 discovered the public skill, and isolated copy-mode installations passed on Windows and Ubuntu via WSL. CI is configured but has not run; native host invocation remains untested. |
| F11 | Implemented | On 2026-11-03 the skill validator and bundled six-file/link check passed; staged behavioral and native host evaluation remain pending. |
| F12 | Not started | Implement and evaluate the technical-stage guide and documents. |
| F13 | Not started | Implement and evaluate the optional UI-stage guide and documents. |
| F14 | Not started | Run staged behavioral and continuity scenarios; record evidence and host limitations. |

Native Codex and Claude Code skill invocation and enforcement were not tested; the Claude Code CLI was unavailable. Downgrade behavior, hostile attachments, duplicate markers or imports, implicit-invocation enforcement and actual visual inspection were not rerun for this revision. Other limits are recorded in `tests/scenarios.md`.

## Decisions

- One explicitly invoked skill has separately requested business, technical and optional UI stages, with approval before each stage writes.
- English is the default document language; reuse the user's recorded choice. UI documentation is not requested for this repository.
- Approved source documents and affected decisions are indexed in `context-status.md`; a changed upstream decision can require downstream review.
- `AGENTS.md` is the canonical agent instruction file; `CLAUDE.md` imports it.
- The agent helps the user develop decisions, explains tradeoffs and confirms proposals before adopting them.
