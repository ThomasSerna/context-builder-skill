# Project Overview

## Purpose

Context Builder helps developers and coding agents agree on what they are going to build before implementation begins. The audience is developers using Codex, Claude Code or other agents that support the Agent Skills format. The conversation follows the user's language; project documentation defaults to English and can use another language selected by the user.

The approved direction is one skill with separately requested business, technical and optional UI stages. Each stage challenges material assumptions, helps the user choose between viable alternatives and writes its own context only after approval of that stage's synthesis. The business stage is being implemented now; the technical and UI stages remain planned.

## In scope

- Business discovery defines the problem, users, value, scope, domain rules and core workflows; commercial considerations apply only when relevant.
- Technical specification will translate approved context into architecture, standards, integration guidance and an implementation plan. UI specification will be separately requested and optional.
- For each requested stage, inspect evidence, challenge consequential assumptions, offer reasoned alternatives and obtain explicit approval before writing. Preserve accepted decisions and unrelated content.
- Keep a durable status index, managed reading list in `AGENTS.md` and `CLAUDE.md` import. Mark affected downstream decisions for review after an approved upstream change.
- Distribute an instruction-only skill with useful examples, installation guidance, project documentation and a repeatable behavioral test protocol.

## Out of scope

- Implementing the target application or selecting project decisions without the user's agreement.
- Running the skill or advancing to another stage without an explicit user request.
- Requiring a proprietary tool, network access or runtime dependency to read and follow the skill.

## Success criteria

For business discovery, a user explicitly requests the stage, resolves relevant product decisions and approves a synthesis before any files are written. The overview makes each core flow's actors, rules, states, outcomes, failures and verification actionable. A later session can recover approved decisions through the status index, and unrelated instructions survive updates. A material approval change requires a revised synthesis. The agent stops after the requested stage; technical and UI requests report their current unavailability. Test results must distinguish static review from execution in a real host.
