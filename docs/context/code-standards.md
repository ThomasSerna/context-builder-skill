# Code Standards

## Skill authoring

- Write repository documentation and skill instructions in English. Keep the user's selected output language for documents generated in their project.
- Keep the skill portable: use standard `name` and `description` frontmatter, relative links to bundled references and no required scripts or third-party services.
- Keep the workflow in `SKILL.md`, interview detail in `references/interview.md`, and the document profiles, order and contracts in `references/documents.md`. Avoid duplicating their rules.
- Preserve explicit invocation, interview, synthesis approval and no-write-before-approval behavior. Do not invent project facts, dependencies or completed work.
- Keep user content intact; resolve ambiguous managed sections or duplicate imports with the user. Maintain feature IDs across the build plan and tracker.

## Validation and changes

- Validate skill frontmatter and bundled relative links. Run the applicable scenarios in `tests/scenarios.md` when behavior changes, and report separately what was and was not exercised in a real host.
- Check installation instructions against the relevant official documentation when changing them. Do not claim compatibility or current APIs without evidence.
- Keep affected project context up to date. Delegate documentation creation and maintenance to the `docs` subagent as directed by `AGENTS.md`.
- Group Git changes into coherent features and use commit subjects in the form `feat: <description>`.
