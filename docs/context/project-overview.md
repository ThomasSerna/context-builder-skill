# Project Overview

## Purpose

Context Builder helps developers and coding agents agree on what they are going to build before implementation begins. The user invokes the skill, answers an adaptive interview, reviews a synthesis and approves it before the agent writes project-specific context under `docs/context/`.

The audience is developers using Codex, Claude Code or other agents that support the Agent Skills format. The conversation follows the user's language; the generated documentation defaults to English and can use another language when chosen at the start.

## In scope

- Inspect relevant evidence in new or existing projects and clarify goals, architecture, constraints, engineering practices and a build plan.
- Ask follow-up questions in rounds of 2–4 and resolve blocking decisions before asking for approval.
- Offer basic or complete documentation, with UI documentation as an independent choice. UI discussions produce approved design values rather than application code.
- Generate a managed reading list in `AGENTS.md`, add the `CLAUDE.md` import and preserve unrelated existing content on re-runs.
- Distribute an instruction-only skill with installation guidance, project documentation and a repeatable behavioral test protocol.

## Out of scope

- Implementing the target application or selecting a stack or visual design without the user's agreement.
- Running the interview automatically without an explicit user request.
- Requiring a proprietary tool, network access or runtime dependency to read and follow the skill.

## Success criteria

The user can install and invoke the skill, select any profile/UI combination and receive a coherent set of documents only after explicitly approving the synthesis. Existing instructions and unrelated content survive updates. Agents can find the selected documents in the intended order and maintain affected context during implementation. Test results must accurately distinguish static review from execution in a real host.
