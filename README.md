# Context Builder

Context Builder is an explicitly invoked [Agent Skill](https://agentskills.io/specification) that interviews you about a software project and turns agreed decisions into working context for you and your coding agents. It supports new and existing projects, with a basic or complete document set and an independent choice to include UI documentation.

The skill asks questions in short rounds, examines existing project evidence and helps develop incomplete ideas. When useful, it compares options, explains tradeoffs and recommends an approach for you to decide. It constructively challenges choices that conflict with your goals or the evidence. It summarizes the result for your approval before writing any files. It documents design and implementation plans; it does not implement the application.

## Install

### Skills CLI

With Node.js 22.20 or later and [`npx skills`](https://github.com/vercel-labs/skills), install for Codex from the published repository:

```sh
npx skills add ThomasSerna/context-builder-skill --skill context-builder --agent codex --global
```

For Claude Code, replace `codex` with `claude-code`. Omit `--global` and run the command in a project directory to install for that project only. The CLI can install skills for other supported agents; use the agent name listed in its documentation.

To install from a local clone before the repository is published, replace `ThomasSerna/context-builder-skill` with the path to the clone. To inspect available skills without installing, run `npx skills add <source> --list`.

### Manual installation

Copy the entire [`skills/context-builder`](skills/context-builder) directory, including `references/` and `agents/`, to the skill directory used by your agent:

| Agent | Project installation | User installation |
| --- | --- | --- |
| Codex | `<project>/.agents/skills/context-builder/` | `~/.agents/skills/context-builder/` |
| Claude Code | `<project>/.claude/skills/context-builder/` | `~/.claude/skills/context-builder/` |

For another agent, follow its Agent Skills installation instructions. Restart the agent if the skill is not discovered. See the current [Codex skill documentation](https://learn.chatgpt.com/docs/build-skills) and [Claude Code skill documentation](https://code.claude.com/docs/en/skills) for supported locations and discovery behavior.

### Explicit invocation

The bundled Codex policy disables implicit invocation. To configure Claude Code's local or user-installed skill the same way, merge this setting into `.claude/settings.local.json` for a project or `~/.claude/settings.json` for your user:

```json
{
  "skillOverrides": {
    "context-builder": "user-invocable-only"
  }
}
```

Preserve any existing settings. The Claude Code `/skills` menu also exposes this state as `user-only`; see [skill visibility settings](https://code.claude.com/docs/en/skills#override-skill-visibility-from-settings). This override does not apply to plugin-provided skills. Other agents may not offer an equivalent setting; the skill instructions themselves require an explicit request.

## Use

From the project you want to document, invoke `$context-builder` in Codex or `/context-builder` in Claude Code. In another compatible agent, use its skill syntax or explicitly ask: “Use context-builder to document this project.” Then choose:

1. **Basic** or **complete** documentation.
2. Whether to include **UI** documentation.
3. The output language, if you prefer something other than English. The interview uses your conversation language.

Answer the questions and review the complete synthesis. Once you approve it, the agent creates or updates the selected documents in `docs/context/`. Existing unrelated content is preserved; context files outside the selected profile remain on disk. The agent maintains a marked reading list in root `AGENTS.md` and ensures root `CLAUDE.md` imports it via `@AGENTS.md`.

| Selection | Documents |
| --- | --- |
| Basic | Project overview, architecture, code standards and build plan |
| Complete | Basic documents plus library documentation and progress tracker |
| UI addition | UI tokens, UI rules and UI registry, with either profile |

The reading order and content contracts are defined in [`documents.md`](skills/context-builder/references/documents.md). As implementation proceeds, keep the affected context current; update the UI registry when components change and the progress tracker when features are completed, when those files are included.

## Development

The skill is instruction-only and has no runtime dependencies. [`tests/scenarios.md`](tests/scenarios.md) describes repeatable checks for the profile matrix, interview, approval and safe re-runs. Repository-specific planning context is in [`docs/context/`](docs/context/).

Useful references include the [Agent Skills specification](https://agentskills.io/specification), [OpenAI's skills repository](https://github.com/openai/skills), [Anthropic's skills repository](https://github.com/anthropics/skills) and the [Superpowers brainstorming skill](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md).

## License

[MIT](LICENSE) © 2026 Thomas Serna.
