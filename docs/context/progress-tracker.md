# Progress Tracker

Update this file after completing a feature. Keep feature IDs aligned with `build-plan.md`; record observed results and remaining work rather than assuming completion.

## Current status

The collaborative interview, document quality criteria and original worked examples are complete. Four profile/UI combinations were exercised at instruction level; after independent review, a targeted follow-up checked the clarified UI-state guidance. See `tests/scenarios.md` for evidence, comparison limits and checks that remain untested.

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

Native Codex and Claude Code skill invocation and enforcement were not tested; the Claude Code CLI was unavailable. Downgrade behavior, hostile attachments, duplicate markers or imports, implicit-invocation enforcement and actual visual inspection were not rerun for this revision. Other limits are recorded in `tests/scenarios.md`.

## Decisions

- The basic/complete profile and UI inclusion are separate choices; the complete profile without UI is used for this repository.
- The skill is explicitly invoked. English is the default output language, with another language selectable at the start.
- UI documentation records approved concrete decisions without implementing the application.
- `AGENTS.md` is the canonical agent instruction file; `CLAUDE.md` imports it.
- The agent helps the user develop decisions, explains tradeoffs and confirms proposals before adopting them.
