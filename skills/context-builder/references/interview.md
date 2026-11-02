# Interview Guide

Use the questions as prompts, not a fixed questionnaire. Ask 2–4 relevant questions per round and follow up until each applicable decision below is settled. Reuse verified repository facts and prior answers. Ask the user to resolve conflicts between the existing project and the desired outcome; distinguish an intentional change from a current fact.

## Collaborate on decisions

Start with what the user knows and the evidence already available. When an answer is vague, propose concrete interpretations and ask which fits; break large decisions into smaller choices. Adapt the explanation to the user's familiarity rather than expecting them to supply a finished specification.

When the user is undecided or would benefit from guidance, compare suitable options against their goals and constraints, explain consequential tradeoffs and costs, and recommend one with a reason. If the user asks you to decide, present your recommendation for confirmation; it remains a proposal until the user agrees. Respect a viable preference after explaining its tradeoffs. Never select a technology, feature or design value merely because it appears in an example.

Question a chosen approach when it conflicts with another decision, the evidence or an explicit goal, or creates a concrete problem. Explain the issue and a viable alternative, then let the user resolve it. Track observed facts, proposals, approved decisions and explicitly deferred decisions separately. A skipped answer or silence is not approval.

For example:

> **User:** I want people to manage appointments easily, but I don't know what the first version needs.
>
> **Agent:** A useful starting point could let staff create and cancel appointments, leaving reminders for later. That keeps the first release focused on the booking workflow. Who should create appointments: staff, customers, or both? Should cancellation be included in the first release?

> **User:** Store the bookings in each browser so my whole team can see the same data.
>
> **Agent:** Browser-local storage does not synchronize bookings between team members. A shared database would support that, but requires a shared service. Does the team need to see the same bookings from different devices? If so, would you prefer shared storage or a device-only first release?

## Starting choices

- Confirm the project and intended outcome. Offer **basic** or **complete** documentation and independently ask whether UI documents are needed. The document contracts define each choice.
- Use the user's language for conversation. Offer English as the default document language and allow the user to choose another language before documentation begins.
- Determine whether this is a new or existing project. For existing work, identify what is already implemented, which documents and agent instructions exist, and which changes are intended.

## Product and scope

Understand the problem, target users, their main workflows, desired outcomes and success criteria. For principal workflows, establish the actors, triggers, inputs, outcomes and relevant failure states. Identify the main features, priorities, boundaries, exclusions, constraints and assumptions. Ask what a first usable version must accomplish and which decisions are deliberately deferred.

## Architecture and technology

Agree on the system's major components and boundaries, architecture style, chosen languages and frameworks, data and storage, important flows and interfaces, and relevant integrations. For each important flow, clarify the data, interfaces and access rules needed to implement it. Discuss authentication, authorization, security, deployment environments, reliability, privacy, performance and operational constraints when they matter. Ask how the proposed design fits the user's skills, resources and existing code.

Avoid presenting a proposed design as an existing implementation. For significant external dependencies, determine their role, compatibility constraints and how to verify their official documentation.

## Implementation and quality

Agree on coding conventions, project structure, error handling, validation, test strategy and dependency practices appropriate to the chosen stack. Break the work into ordered, independently verifiable features or milestones, with dependencies and acceptance criteria. For an existing project, distinguish completed and pending work using evidence, not assumptions.

## UI, only when selected

Identify users' screens or surfaces, core flows, component needs, layout, interaction and visual references. Inspect provided references when the host can do so; distinguish observable details from inferences and ask the user to resolve conflicts or blocking ambiguities. If a reference cannot be inspected, say so and ask for the missing decisions. Agree on concrete values for applicable color, typography, spacing and other design tokens, and on responsive behavior, accessibility, interaction and applicable loading, empty and error states. Ask about an existing design system or component library where relevant. Present proposed values for the user's approval; do not treat unapproved examples as decisions. Discuss expected components without claiming they already exist.

## Completion

The interview is complete when the agreed evidence and decisions satisfy the selected [document contracts and coverage review](documents.md#coverage-and-consistency-review), blocking conflicts are resolved, and any remaining nonblocking choices are explicitly deferred with a decision point. The planned output must distinguish observed, approved and pending work. Then follow the synthesis and approval step in `SKILL.md`; do not write documents first.
