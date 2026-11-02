# Interview Guide

Use the questions as prompts, not a fixed questionnaire. Ask 2–4 relevant questions per round and follow up until each applicable decision below is settled. Reuse verified repository facts and prior answers. Ask the user to resolve conflicts between the existing project and the desired outcome; distinguish an intentional change from a current fact.

## Starting choices

- Confirm the project and intended outcome. Offer **basic** or **complete** documentation and independently ask whether UI documents are needed. The document contracts define each choice.
- Use the user's language for conversation. Offer English as the default document language and allow the user to choose another language before documentation begins.
- Determine whether this is a new or existing project. For existing work, identify what is already implemented, which documents and agent instructions exist, and which changes are intended.

## Product and scope

Understand the problem, target users, their main workflows, desired outcomes and success criteria. Identify the main features, priorities, boundaries, exclusions, constraints and assumptions. Ask what a first usable version must accomplish and which decisions are deliberately deferred.

## Architecture and technology

Agree on the system's major components and boundaries, architecture style, chosen languages and frameworks, data and storage, important flows and interfaces, and relevant integrations. Discuss authentication, authorization, security, deployment environments, reliability, privacy, performance and operational constraints when they matter. Ask how the proposed design fits the user's skills, resources and existing code.

When the user is undecided, compare a few suitable options and their tradeoffs, then ask for a choice. Avoid presenting a proposed design as an existing implementation. For significant external dependencies, determine their role, compatibility constraints and how to verify their official documentation.

## Implementation and quality

Agree on coding conventions, project structure, error handling, validation, test strategy and dependency practices appropriate to the chosen stack. Break the work into ordered, independently verifiable features or milestones, with dependencies and acceptance criteria. For an existing project, distinguish completed and pending work using evidence, not assumptions.

## UI, only when selected

Identify users' screens or surfaces, core flows, component needs, layout, interaction and visual references. Agree on concrete values for applicable color, typography, spacing and other design tokens, and on responsive behavior, accessibility, interaction and common states. Ask about an existing design system or component library where relevant. Present proposed values for the user's approval; do not treat unapproved examples as decisions. Discuss expected components without claiming they already exist.

## Completion

The interview is complete when all applicable areas have enough agreed detail to produce the selected documents, contradictions and decisions blocking the planned work are resolved, and any remaining nonblocking choices are explicitly deferred with a decision point. The planned output must distinguish observed, approved and pending work. Then follow the synthesis and approval step in `SKILL.md`; do not write documents first.
