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

Write specific, actionable content based on the interview and evidence, with detail proportional to the project's scope and complexity. Adapt headings to the project; omit irrelevant topics rather than filling a template. Describe existing state only when observed, agreed plans as plans, and explicitly deferred nonblocking decisions with their next decision point. Use illustrative snippets only when useful to explain approved decisions, and identify them as examples rather than application implementation. Maintain consistency between documents and preserve stable existing feature IDs on updates.

For illustrations of useful detail, consult the relevant [worked examples](examples.md); they are not project defaults.

## Core documents

- **Project overview:** problem, target users, goals, measurable success criteria where agreed, principal workflows, features in scope, exclusions and important constraints. Describe the actor, trigger, relevant business rules and expected outcome of each principal workflow, including important failure states when applicable.
- **Architecture:** selected stack, system boundaries and components, data and control flows, storage, interfaces, integrations, deployment and applicable security and operational constraints. For principal flows, describe the relevant data, inputs and outputs, access rules and failures at the detail needed for the agreed work. Distinguish existing architecture from approved changes.
- **Code standards:** applicable project structure, naming and style conventions, validation and error handling, dependency practices, testing expectations and other agreed engineering rules. Ground project-specific commands and conventions in evidence or approved decisions.
- **Build plan:** ordered phases or independently verifiable features, dependencies, acceptance criteria and next steps. Cover every principal in-scope requirement with planned work and a verifiable acceptance criterion. Give each feature a stable ID, preserving existing IDs when possible; use those IDs in the progress tracker when present.

## Complete profile

- **Library documentation:** selected libraries and services, their purpose, applicable version constraints, project-specific integration guidance and direct links to authoritative documentation when verified. Use available official documentation tools or web access; when unavailable, mark claims requiring verification rather than inventing current APIs, versions or URLs. Illustrative API snippets are optional and must have a verified source or be marked for verification. Do not put credentials in documentation.
- **Progress tracker:** current phase, verified completed work, work in progress, next steps, feature statuses keyed to the build-plan IDs, and decisions made during implementation. For a new project, mark work as not started; never claim a feature is complete without evidence. Instruct future agents to update this document after a feature is completed.

## UI documents

- **UI tokens:** concrete approved semantic values for applicable colors, typography, spacing and other design tokens, including relevant themes and contrast expectations. Mark any deliberately deferred nonblocking token clearly; never substitute an invented value.
- **UI rules:** approved screens or surfaces, layout and component principles, user interaction, applicable loading, empty and error states, responsive behavior and accessibility expectations. Describe the relevant behavior and states of principal UI flows. Refer to the tokens rather than duplicating their definitions.
- **UI registry:** a living inventory of implemented components, their purposes, source paths and relevant reuse patterns. For a new project start with an empty inventory; do not list planned components as implemented. In an existing project include only components supported by observed evidence. Instruct future agents to consult the registry before building a component and update it after adding or changing one.

## Coverage and consistency review

Use this review on the agreed decisions before synthesis and again on the generated documents. Ask the user to resolve blocking gaps or contradictions; do not invent details or silently change an approved decision.

- Across the selected documents, identify each principal workflow's actor, trigger, relevant inputs, business rules, expected outcome and significant failure states, when applicable. Map every principal in-scope requirement to planned work and a verifiable acceptance criterion; resolve missing blocking decisions with the user. Check that the plan and UI do not add excluded features.
- Cross-check principal flows against their data, interfaces and permissions; cross-check UI rules against approved tokens and feature IDs against the tracker when present.
- Distinguish observed implementation, approved plans, proposals and explicitly deferred decisions. Verify paths and Markdown links presented as existing artifacts; label planned paths and links as planned without requiring their targets to exist. Identify claims that require source verification.
- Remove stale editorial labels or superseded fragments from the generated or managed content. Preserve unrelated user content and resolve ambiguous edits with the user.

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
