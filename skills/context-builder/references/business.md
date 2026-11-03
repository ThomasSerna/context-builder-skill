# Business Stage

Clarify the product and domain with the user. Commercial matters such as pricing, revenue or market acquisition belong here only when relevant to the project. Do not require technology or visual design choices merely to finish this stage.

## Interview

Establish the problem, intended users and value, goals and agreed measures of success. Determine the first useful scope, priorities, exclusions, assumptions and constraints. For existing projects, distinguish verified behavior from the desired change.

For each core workflow, establish its actor, trigger, inputs and preconditions, business rules and permissions, relevant states or transitions, expected result and meaningful failures. Probe outcomes that would change the user's experience or data: ownership, limits, conflicting actions, missing or invalid information, and what happens when a step cannot finish. Use the project's actual risks, rather than imposing irrelevant cases.

Examine important assumptions and choices using the [collaboration guide](interview.md). For an undecided or incompatible product decision, compare viable alternatives and recommend one in terms of the user's goals and constraints. Confirm the choice; do not import a feature or rule from the example below. Discuss pricing or other commercial questions only if they affect the project.

## Completion and output

Before synthesis, check that `project-overview.md` can describe the following using verified evidence or user-approved decisions:

- The problem, users, value, goals and any agreed success measures; the first-release priorities, scope, exclusions and constraints.
- Every core workflow's actor, trigger, inputs, applicable rules and states, outcome and significant failures, at a level that does not leave a blocking business decision for an implementer to invent.
- Observable checks for each core workflow, including its main outcome and material rejection or failure where applicable. Explicitly deferred nonblocking decisions have a next decision point.

After synthesis approval, write those decisions to `docs/context/project-overview.md`, distinguishing existing behavior from the approved plan. Use suitable headings for the project. Preserve unrelated existing content and maintain the [shared status and agent instructions](documents.md).

## Worked example

The following decisions are fictional and approved only for this example. They illustrate depth, not a template or defaults.

This original example was adapted from the skill's earlier fictional examples, whose organization and depth were informed by [JobPilot's context documentation](https://github.com/adrianhajdin/job_pilot/tree/788baa5784f94264c33780fd051f9d0b17a68f60/context) by Adrian Hajdin / JavaScript Mastery.

**Weak:** “Members reserve equipment and stewards approve it.” It leaves conflicts, ownership and outcomes open.

**Actionable:** An active member requests a future interval for one item; the end must be after the start. The request begins pending. Pending requests may overlap, but a steward may approve only one request for the same item and overlapping interval. A member can cancel their own pending or approved request before its start; cancellation makes an approved interval available again. A rejected or conflicting request reports why and preserves the entered interval. The first release excludes payments and notifications.

**Checks:** Two overlapping pending requests may be submitted, but approving one prevents approval of the other. An adjacent interval is available. A member cannot cancel another member's request, and an invalid interval creates no request.
