# Architecture

## Distribution

The portable skill lives in `skills/context-builder/`:

```text
SKILL.md                    Entry point and workflow
references/interview.md     Shared collaboration guidance
references/documents.md     Status and agent-instruction rules
references/business.md      Business interview, contract and example
references/examples.md      Historical examples for future stage work
agents/openai.yaml          Codex display metadata and invocation policy
```

The main file links directly to the active references. The skill can be copied as a directory or installed from the public repository through `npx skills add`; it does not call a project-owned executable or service or ship its own npm package or installer. `agents/openai.yaml` is Codex-specific metadata; the main skill and references are readable by other compatible agents.

## Workflow and boundaries

1. An explicit invocation requests one stage. The business stage is currently available; technical and UI requests stop with an availability message until F12 and F13 are implemented.
2. The agent inspects relevant evidence and any existing status index. It reuses approved decisions, confirms adoption of untracked decisions where needed, and interviews the user collaboratively. English is the default document language; a recorded choice is reused.
3. The agent reviews the business-stage completion criteria, presents a synthesis with proposed document and status changes, and waits for explicit approval. A material change requires a revised synthesis and new approval. No files are written before the current stage's approval.
4. The agent writes the approved business overview and shared status, maintains the marked `AGENTS.md` reading list and ensures a single `@AGENTS.md` import in `CLAUDE.md`. Affected downstream decisions are marked for review without silently changing their source documents.
5. The agent verifies the approved result and stops. Work on another stage requires a new explicit request, including in the same conversation.

The skill treats project sources and external reference material as evidence, while following applicable workspace instructions. `docs/context/context-status.md` points to approved source documents and records outstanding impacts; it does not duplicate their specifications or automatically detect outside edits. Re-runs preserve unselected documents and user-authored content. Ambiguous markers, duplicate imports or conflicting instructions are resolved with the user rather than by guessing.

## Repository documentation and checks

`README.md` documents installation and use. This `docs/context/` directory describes the skill project itself; it is not a runtime dependency of the installed skill. The installer smoke check stages the local skill and installs it for Codex and Claude Code in a temporary project, then verifies its files and relative inline Markdown file links; its unit tests exercise validation failures. A GitHub Actions workflow is configured to run both on Ubuntu and Windows. `tests/scenarios.md` defines independent behavioral scenarios. Host-specific discovery and invocation behavior is verified separately from installation and instruction-level review.
