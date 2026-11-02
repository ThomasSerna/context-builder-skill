# Progress Tracker

Update this file after completing a feature. Keep feature IDs aligned with `build-plan.md`; record observed results and remaining work rather than assuming completion.

## Current status

The previous skill package, document contracts and behavioral scenarios were completed and evaluated as recorded in `tests/scenarios.md`. An enhancement is underway: collaborative interview guidance and document quality criteria have been updated; portable examples and new evaluations remain. Earlier results do not establish that the enhanced workflow has passed those evaluations.

## Features

| ID | Status | Evidence or remaining work |
| --- | --- | --- |
| F01 | Previously verified | The validator passed; isolated CLI copies contained the four skill files and resolved their references. |
| F02 | Previously evaluated | Four instruction-level interviews reached approval; a changed decision required renewed approval. |
| F03 | Previously evaluated | Four profile/UI combinations, existing content, a repeat run and a downgrade were checked. |
| F04 | Previously complete | README, license, project context and root agent instructions passed final review. |
| F05 | Previously complete | Scoped package, installation and behavioral checks are recorded; remaining limitations are listed below. |
| F06 | In progress | Collaborative interview guidance is being updated; evaluation of the new behavior remains. |
| F07 | In progress | Document coverage and consistency criteria are defined; evaluation of the new behavior remains. |
| F08 | Planned | Add original, credited examples and verify their portable links. |
| F09 | Planned | Evaluate the enhanced workflow and record evidence and host limitations. |

Details and limits are recorded in `tests/scenarios.md`. Native Codex and Claude Code skill invocation and enforcement were not tested; the Claude Code CLI was unavailable. The safety scenarios listed as untested in that file remain open.

## Decisions

- The basic/complete profile and UI inclusion are separate choices; the complete profile without UI is used for this repository.
- The skill is explicitly invoked. English is the default output language, with another language selectable at the start.
- UI documentation records approved concrete decisions without implementing the application.
- `AGENTS.md` is the canonical agent instruction file; `CLAUDE.md` imports it.
- The agent helps the user develop decisions, explains tradeoffs and confirms proposals before adopting them.
