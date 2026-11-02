# Library and Platform Documentation

The skill has no runtime library dependencies. The following tools and formats are relevant to distribution and validation; they do not have to be present for an agent to follow the installed skill.

## Agent Skills

The [Agent Skills specification](https://agentskills.io/specification) defines the portable skill directory, required frontmatter and relative reference conventions. Keep `skills/context-builder/` self-contained, including its referenced materials.

## Codex

The [Codex skills documentation](https://learn.chatgpt.com/docs/build-skills) describes discovery, explicit `$skill` invocation and `agents/openai.yaml`. This repository sets `policy.allow_implicit_invocation: false` for the skill. When changing metadata, check the current Codex documentation and validate it without adding runtime dependencies to the skill.

## Claude Code

The [Claude Code skills documentation](https://code.claude.com/docs/en/skills) describes installation, `/skill` invocation and `skillOverrides`. For local or user-installed copies, `user-invocable-only` can restrict the skill to user invocation without adding a Claude-specific frontmatter field. The documented override does not apply to plugin-provided skills. Root `CLAUDE.md` imports `AGENTS.md` with `@AGENTS.md`.

## Skills CLI

The [Skills CLI](https://github.com/vercel-labs/skills) supports `npx skills add` for installing a skill from a repository or local path. The CLI currently requires Node.js 22.20 or later; remote installation also needs Git and network access. The skill itself has no runtime dependency. The automated installer check downloads CLI 1.7.5 into a fresh temporary cache and needs network access. Check the CLI's current documentation for supported agent names and options; a whole-folder manual installation is also available.
