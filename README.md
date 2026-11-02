# Context Builder

Context Builder is an explicitly invoked [Agent Skill](https://agentskills.io/specification) that interviews you about a software project and turns agreed decisions into working context for you and your coding agents. It supports new and existing projects, with a basic or complete document set and an independent choice to include UI documentation.

The skill asks questions in short rounds, examines existing project evidence and helps develop incomplete ideas. When useful, it compares options, explains tradeoffs and recommends an approach for you to decide. It constructively challenges choices that conflict with your goals or the evidence. It checks that the agreed scope, implementation plan and relevant design and technical decisions fit together, then summarizes the result for your approval before writing any files. It documents design and implementation plans; it does not implement the application.

## Install

### Skills CLI

Install or share Context Builder with the [Skills CLI](https://github.com/vercel-labs/skills):

```sh
npx skills add ThomasSerna/context-builder-skill --skill context-builder
```

The installer lets you choose an agent and installation scope. You need Node.js 22.20 or later, npm/npx, Git and network access to download the CLI and repository. Run the command in your project directory if you choose a project installation.

To select an agent and scope directly, choose a command for the installation you need:

```sh
# Project installation: run inside the project directory
npx skills add ThomasSerna/context-builder-skill --skill context-builder --agent codex --yes
npx skills add ThomasSerna/context-builder-skill --skill context-builder --agent claude-code --yes

# Global installation for your user
npx skills add ThomasSerna/context-builder-skill --skill context-builder --agent codex --global --yes
npx skills add ThomasSerna/context-builder-skill --skill context-builder --agent claude-code --global --yes
```

Add `--copy` to an `add` command to install separate copies instead of symlinks, for example when your system does not permit symlinks. Reinstalling can replace local changes to an installed skill; back them up first. The CLI also supports other agents; use the names in its documentation. To install from a local checkout, replace `ThomasSerna/context-builder-skill` with its path and quote the path if it contains spaces. To inspect a source without installing, run `npx skills add <source> --list`.

To update Context Builder, run the command for the installation scope. The project command must be run in the project directory:

```sh
npx skills update context-builder --project
npx skills update context-builder --global
```

Updates are scoped by skill and installation scope, not by agent. The CLI detects target agents when updating, so its selection may differ from the original installation. For an installation from a local checkout, update the checkout and rerun the original `skills add` command; the CLI skips local sources during `skills update`. Back up any local changes to the installed skill first. To remove a Codex installation, run the appropriate command; replace `codex` with `claude-code` for Claude Code:

```sh
npx skills remove context-builder --agent codex --yes
npx skills remove context-builder --agent codex --global --yes
```

The first removal command applies to the current project. Manual installations must be removed from the corresponding skill directory manually.

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

The [worked context examples](skills/context-builder/references/examples.md) are original fictional excerpts illustrating useful detail, not templates or default project choices. Their organization and depth were inspired by [JobPilot's context documentation](https://github.com/adrianhajdin/job_pilot/tree/788baa5784f94264c33780fd051f9d0b17a68f60/context) by Adrian Hajdin / JavaScript Mastery (`adrianhajdin`). No JobPilot documentation or design assets are included.

## Development

The skill is instruction-only and has no runtime dependencies. The installer checks use Node.js 22.20 or later. The smoke check downloads Skills CLI 1.7.5 into a fresh temporary npm cache and needs network access:

```sh
node --test tests/install-smoke.test.mjs
node tests/install-smoke.mjs
```

The smoke check stages the local skill in a temporary source directory and installs it into a temporary project for Codex and Claude Code in copy mode, then compares the installed files with the checkout and checks relative inline Markdown file links. A GitHub Actions workflow is configured to run these checks with Node.js 24 on Ubuntu and Windows for pull requests, pushes to `main` and manual runs. [`tests/scenarios.md`](tests/scenarios.md) describes the installer checks and separate behavioral scenarios. Repository-specific planning context is in [`docs/context/`](docs/context/).

Useful references include the [Agent Skills specification](https://agentskills.io/specification), [OpenAI's skills repository](https://github.com/openai/skills), [Anthropic's skills repository](https://github.com/anthropics/skills) and the [Superpowers brainstorming skill](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md).

## License

This repository's original work is licensed under [MIT](LICENSE) © 2026 Thomas Serna.
