# Document Contracts

This table is the source of truth for generated filenames, profile membership and reading order. **Basic** includes its four files; **complete** includes those four plus the two marked complete. The **UI** choice independently adds its three files to either profile. All paths are relative to the project root.

| Order | File | Included in |
| --- | --- | --- |
| 1 | `docs/context/project-overview.md` | Basic and complete |
| 2 | `docs/context/architecture.md` | Basic and complete |
| 3 | `docs/context/ui-tokens.md` | UI |
| 4 | `docs/context/ui-rules.md` | UI |
| 5 | `docs/context/ui-registry.md` | UI |
| 6 | `docs/context/code-standards.md` | Basic and complete |
| 7 | `docs/context/library-docs.md` | Complete |
| 8 | `docs/context/build-plan.md` | Basic and complete |
| 9 | `docs/context/progress-tracker.md` | Complete |

Write specific, actionable content based on the interview and evidence. Adapt headings to the project and avoid empty boilerplate. Describe existing state only when observed, agreed plans as plans, and explicitly deferred nonblocking decisions with their next decision point. Maintain consistency between documents and preserve stable existing feature IDs on updates.

## Core documents

- **Project overview:** problem, target users, goals, success criteria, principal workflows, features in scope, exclusions and important constraints.
- **Architecture:** selected stack, system boundaries and components, data and control flows, storage, interfaces, integrations, deployment and applicable security and operational constraints. Distinguish existing architecture from approved changes.
- **Code standards:** applicable project structure, naming and style conventions, validation and error handling, dependency practices, testing expectations and other agreed engineering rules.
- **Build plan:** ordered phases or independently verifiable features, dependencies, acceptance criteria and next steps. Give each feature a stable ID, preserving existing IDs when possible; use those IDs in the progress tracker when present.

## Complete profile

- **Library documentation:** selected libraries and services, their purpose, applicable version constraints, project-specific integration guidance and direct links to authoritative documentation when verified. Use available official documentation tools or web access; when unavailable, mark claims requiring verification rather than inventing current APIs, versions or URLs. Do not put credentials in documentation.
- **Progress tracker:** current phase, verified completed work, work in progress, next steps, feature statuses keyed to the build-plan IDs, and decisions made during implementation. For a new project, mark work as not started; never claim a feature is complete without evidence. Instruct future agents to update this document after a feature is completed.

## UI documents

- **UI tokens:** concrete approved semantic values for applicable colors, typography, spacing and other design tokens, including relevant themes and contrast expectations. Mark any deliberately deferred nonblocking token clearly; never substitute an invented value.
- **UI rules:** approved layout and component principles, user interaction, common states, responsive behavior and accessibility expectations. Refer to the tokens rather than duplicating their definitions.
- **UI registry:** a living inventory of implemented components, their purposes, source paths and relevant reuse patterns. For a new project start with an empty inventory; do not list planned components as implemented. In an existing project include only components supported by observed evidence. Instruct future agents to consult the registry before building a component and update it after adding or changing one.

## Root agent instructions

In `AGENTS.md`, use exactly one managed section bounded by these markers. Retain all content outside it. For the numbered list, include only selected active files from the table above, preserving its order and renumbering the list consecutively. The heading and introduction must match this example exactly:

```markdown
<!-- context-builder:begin -->
# Read Before Anything Else

Read in this exact order before any implementation:

1. docs/context/project-overview.md
2. docs/context/architecture.md
<!-- Continue with the selected files from the table, in order. -->

Keep the affected context documents current as the project changes.
<!-- context-builder:end -->
```

Do not include the illustrative comment in the generated section. If the registry or tracker is active, their own instructions define their specific maintenance. If markers are duplicated, unbalanced or ambiguous, or an existing section conflicts with this one, ask the user to resolve the conflict without guessing what to delete. Existing unselected documents stay on disk and are not added to the managed list.

In root `CLAUDE.md`, ensure exactly one active `@AGENTS.md` import and preserve other instructions. An existing active import can appear inline; keep it instead of adding another. If there is no active import, add `@AGENTS.md` on a line of its own. Mentions inside inline code or fenced code blocks are not active imports. If duplicate active imports exist, ask the user how to resolve them rather than deleting content by guesswork.
