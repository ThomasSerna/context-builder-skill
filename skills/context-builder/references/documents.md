# Status and Document Rules

Each invocation covers one stage. The business stage creates or updates `docs/context/project-overview.md`. Technical and UI stages are planned and unavailable in this version. Do not create their documents or mark their stages approved as a result of a business-stage invocation.

## Context status

After approval of the current stage, create or update `docs/context/context-status.md` as the shared index. Keep the decisions themselves in their source documents; the index links to existing documents and identifies the relevant decisions, unresolved questions and affected areas without copying the specifications.

Track business, technical and UI separately as **Approved**, **Needs review** or **Not started**. UI may instead be **Not requested**. Record the document language and the user's explicit UI choice, if any; otherwise mark the UI choice undecided. Do not infer that UI is excluded merely because it has not been requested. A stage is approved only for the scope the user approved; do not mark another stage approved merely because a prerequisite decision was confirmed. Include each approved or review-needed stage's scope and links to existing source documents, and name any pending decision or downstream impact and its next decision point.

For a new index, use a single section between `<!-- context-builder:status-begin -->` and `<!-- context-builder:status-end -->`. Preserve content outside it. If existing markers are incomplete, duplicated or ambiguous, or the index contains contradictory entries, ask the user how to resolve them rather than guessing. Present the planned index change in the stage synthesis before writing.

On a later invocation, read the index and linked evidence; reuse recorded approved decisions without asking again unless there is a material conflict or change. An index does not detect edits made outside this workflow, so inspect relevant sources and resolve discrepancies with the user. Existing documents with no approval record are evidence; obtain explicit adoption before relying on them as approved decisions.

When an approved change affects another stage, identify the specific affected decisions or areas in the synthesis. After approval, mark those areas **Needs review** in the index and preserve the downstream documents' substance until the user approves their reconciliation. Leave unaffected decisions as approved. Do not claim a pending downstream change has been made or that the context is fully consistent.

## Root agent instructions

After approval, maintain one section in root `AGENTS.md` between `<!-- context-builder:begin -->` and `<!-- context-builder:end -->`. Preserve everything outside it. List `docs/context/context-status.md` first, followed by existing active approved or review-needed documents in this order: project overview, architecture, UI tokens, UI rules, UI registry, code standards, library docs, build plan and progress tracker. Do not list missing or unapproved documents. Preserve unselected documents on disk.

Use the heading `# Read Before Anything Else`, ask agents to read the listed files in order before implementation, and instruct them to resolve affected areas marked **Needs review** before relying on those areas for implementation. Instruct agents to keep affected context current as the project changes. If the managed markers are incomplete, duplicated or ambiguous, or existing instructions conflict, preserve the files and ask the user how to resolve the problem.

In root `CLAUDE.md`, ensure exactly one active `@AGENTS.md` import and preserve other instructions. An existing active import can appear inline; keep it instead of adding another. Mentions inside inline code or fenced code blocks are not active imports. If duplicate active imports exist, ask the user how to resolve them rather than guessing what to delete.

Verify that index links and listed active paths exist, the managed reading list starts with the index, the Claude import occurs once and unrelated content remains intact. Do not write any of these files before the current stage's synthesis is approved.
