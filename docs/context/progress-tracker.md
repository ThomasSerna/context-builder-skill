# Progress Tracker

Update this file after completing a feature. Keep feature IDs aligned with `build-plan.md`; record observed results and remaining work rather than assuming completion.

## Current status

The skill, interview and document contracts, behavioral scenarios, README, license and this repository's context are complete. Package validation, isolated installation and scoped instruction-level evaluations are recorded in `tests/scenarios.md`. Implementation commits are recorded in Git history.

## Features

| ID | Status | Evidence or remaining work |
| --- | --- | --- |
| F01 | Verified | The validator passed; isolated CLI copies contained the four skill files and resolved their references. |
| F02 | Evaluated | Four instruction-level interviews reached approval; a changed decision required renewed approval. |
| F03 | Evaluated | Four profile/UI combinations, existing content, a repeat run and a downgrade were checked. |
| F04 | Complete | README, license, project context and root agent instructions passed final review. |
| F05 | Complete | Scoped package, installation and behavioral checks are recorded; remaining limitations are listed below. |

Details and limits are recorded in `tests/scenarios.md`. Native Codex and Claude Code skill invocation and enforcement were not tested; the Claude Code CLI was unavailable. The safety scenarios listed as untested in that file remain open.

## Decisions

- The basic/complete profile and UI inclusion are separate choices; the complete profile without UI is used for this repository.
- The skill is explicitly invoked. English is the default output language, with another language selectable at the start.
- UI documentation records approved concrete decisions without implementing the application.
- `AGENTS.md` is the canonical agent instruction file; `CLAUDE.md` imports it.
