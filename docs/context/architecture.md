# Architecture

## Distribution

The portable skill lives in `skills/context-builder/`:

```text
SKILL.md                    Entry point and workflow
references/interview.md     Interview topics and completion criteria
references/documents.md     Output contracts and reading order
agents/openai.yaml          Codex display metadata and invocation policy
```

The main file links directly to its references. The skill can be copied as a directory or installed through the Skills CLI; it does not call a project-owned executable or service. `agents/openai.yaml` is Codex-specific metadata; the main skill and references are readable by other compatible agents.

## Workflow and boundaries

1. An explicit user invocation starts the workflow. The agent inspects relevant repository state and offers basic/complete and UI choices.
2. The agent conducts an adaptive, collaborative interview, helping the user formulate decisions, explaining options and tradeoffs, and constructively challenging concrete conflicts. It separates observed facts, proposals, approved and deferred decisions and resolves blockers. The user selects the document language, which defaults to English.
3. The agent checks the agreed decisions against the selected document contracts, presents the complete synthesis and waits for explicit approval. A material change invalidates that approval. No generated, draft or checkpoint files are written beforehand.
4. The agent creates or updates the selected context files, maintains the marked `AGENTS.md` reading list and ensures a single `@AGENTS.md` import in `CLAUDE.md`.
5. The agent repeats the contract and consistency review on the generated output and checks accuracy, agreement with the selected profile and preservation of unrelated content.

The skill treats project sources and external reference material as evidence, while following applicable workspace instructions. Re-runs preserve unselected documents and user-authored content. Ambiguous markers, duplicate imports or conflicting instructions are resolved with the user rather than by guessing.

## Repository documentation and checks

`README.md` documents installation and use. This `docs/context/` directory describes the skill project itself; it is not a runtime dependency of the installed skill. `tests/scenarios.md` defines independent behavioral scenarios. Host-specific discovery and invocation behavior is verified separately from instruction-level review.
