<!-- context-builder:begin -->
# Read Before Anything Else

Read in this exact order before any implementation:

1. docs/context/project-overview.md
2. docs/context/architecture.md
3. docs/context/code-standards.md
4. docs/context/library-docs.md
5. docs/context/build-plan.md
6. docs/context/progress-tracker.md

Keep the affected context documents current as the project changes.
<!-- context-builder:end -->

## Silent execution

- Remain completely silent while working.
- Do not send acknowledgements, progress/status updates, intermediate results, reasoning, or narration of commands, tools, file operations, edits, builds, or tests.
- Do not send messages between tool calls.
- Complete all requested work and verification before responding.
- Send exactly one concise user-facing message when the entire task is complete.
- Interrupt only if essential user input or permission is strictly required to continue.

## Documentation Delegation

- Always delegate documentation creation, updates, and maintenance to the `docs` subagent.
- Never modify documentation directly in the main agent.
- Delegate documentation updates when code changes require them.
- Review the subagent's changes before completing the task.
