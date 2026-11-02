# Worked context examples

These original excerpts illustrate useful depth for a fictional, new equipment-booking project. They are not templates, default choices, or a complete specification. Read only the examples relevant to the selected documents. Ask the actual user about their project; never transfer the example's technology, permissions, values, or feature scope as their decisions.

The example assumes the fictional user has approved the decisions shown. Its proposed implementation has not been built. A real project's evidence and approved decisions determine what belongs in its documents.

**Inspiration and credit:** The organization and level of detail were informed by the [JobPilot context documentation](https://github.com/adrianhajdin/job_pilot/tree/788baa5784f94264c33780fd051f9d0b17a68f60/context) by Adrian Hajdin / JavaScript Mastery (`adrianhajdin`). These excerpts were written for Context Builder; no JobPilot documentation or design assets are redistributed here.

## `project-overview.md`

**Weak:** “Members can book equipment.” This leaves ownership, availability and the result of a request undefined.

**Actionable excerpt:**

> Northlight is a proposed web app for one makerspace. Its members need to reserve individual cameras and recorders; stewards decide which requests to approve. The current process is a shared paper calendar that can be updated by only one person at a time.

### Users and scope

- Active members can browse the equipment catalog, request a time interval, see their own requests and cancel a pending or approved request before its start.
- Stewards have member capabilities and can review pending requests, approve one that remains available or decline it.
- An operator provisions users, roles and equipment outside the app. Self-registration, multiple makerspaces, payments and notifications are outside the first release.

### Main workflow: request and review

1. A signed-in member chooses an item and a future start and end time, displayed in UTC. The end must be later than the start.
2. The catalog reports whether that interval conflicts with an approved request. A pending request does not reserve the item, so two members can request the same interval.
3. On submission, the server checks the item, interval and current availability. If available, it stores a pending request and shows its status in the member's list; if not, it reports the conflict and preserves the entered times.
4. A steward reviews a pending request. Approval rechecks availability: one overlapping request can be approved, and a competing approval returns a conflict. A steward can decline a pending request.
5. The owner can cancel their pending or approved request before the start; cancelling an approved request makes that interval available again.

### Acceptance

- A member can submit a valid request and see it as pending; the request remains pending until a steward acts or its owner cancels it.
- Two pending requests may overlap, but approving both for the same item and overlapping interval is impossible, including when approvals arrive concurrently.
- A member cannot view or cancel another member's request. A steward can review pending requests but cannot cancel another member's request.
- Invalid times, an unavailable interval and an expired session produce understandable feedback without a misleading success state.

## `architecture.md`

**Weak:** “Use a database and an API.” An implementer cannot tell who can modify a booking or how simultaneous approvals are handled.

**Actionable excerpt:**

### Proposed system

| Part | Responsibility |
| --- | --- |
| React browser app, written in TypeScript | Collect UTC intervals, display availability and request states; never make authorization decisions on its own. |
| TypeScript server | Authenticate through the makerspace's existing OpenID Connect provider; enforce membership, permissions, time validation and request transitions. |
| PostgreSQL | Store equipment, active memberships and requests; protect approval and cancellation transactions. |

The browser and server are planned behind one HTTPS origin. The identity provider is existing infrastructure in this fictional scenario; its specific SDK and compatible versions are to be chosen before F01 implementation. There is no app implementation yet.

### Data and authorization

| Record | Relevant fields | Access |
| --- | --- | --- |
| Membership | identity-provider subject, role (`member` or `steward`), active flag | The server reads a provisioned membership after login. An inactive or unknown identity is denied access. |
| Item | ID, name, active flag | Active members can read active items. The operator manages the catalog outside the app. |
| Request | ID, item ID, member subject, UTC start and end, status | Members see and cancel only their own requests; stewards see pending requests and may approve or decline them. |

The server obtains the member subject and role from the authenticated session and trusted membership record, not from submitted form fields. A session contains no database credentials; state-changing requests must enforce authorization and CSRF protection. Request intervals are half-open `[start, end)`, so one request may start exactly when another ends.

### Planned interfaces and state changes

| Operation | Input and result |
| --- | --- |
| `GET /api/items?start=…&end=…` | Authenticated member supplies a valid UTC interval; returns active items and whether each overlaps an approved request. |
| `POST /api/requests` | Authenticated member supplies an item ID and UTC interval; creates a pending request or returns a validation or availability error. |
| `GET /api/requests/mine` | Returns only the authenticated member's requests and statuses. |
| `GET /api/requests/pending` | Returns the pending review queue to a steward. |
| `POST /api/requests/{id}/approve` or `/decline` | Steward moves a pending request to approved or declined; approval requires a future start and no approved overlap. |
| `POST /api/requests/{id}/cancel` | The owner cancels their pending or approved request before its start. |

The server rejects invalid input with `422`, an expired or missing session with `401`, forbidden operations with `403`, and a stale state or availability conflict with `409`. A failed operation leaves the stored state unchanged.

Every request state change locks the item in a transaction before checking the current request state. Submission and approval also recheck for an approved overlap before committing. Competing approvals therefore cannot both commit for overlapping intervals, and cancellation cannot race with approval. The availability check uses `existing.start < requested.end` and `existing.end > requested.start` for the same item and approved status.

## `ui-tokens.md`

This excerpt records **fictional approved values**, not a palette to adopt automatically.

| Token | Value | Intended use |
| --- | --- | --- |
| `surface` | `#FFFFFF` | Page and form background |
| `text` | `#1D2733` | Main text on the surface |
| `primary` | `#1D4ED8` | Primary button and link color |
| `on-primary` | `#FFFFFF` | Text on a primary button |
| `focus` | `#7C3AED` | Visible keyboard focus outline |
| `space` | `4px`, `8px`, `16px`, `24px` | Common gaps and padding |
| `font-body` | system sans-serif, `16px` base | Body and form text |

Normal text requires at least 4.5:1 contrast against its background; focus indicators require at least 3:1 against adjacent colors. Check actual combinations, including interaction states, before implementation. Status labels include words as well as color.

## `ui-rules.md`

- Catalog: a date-time range control above the item list; each item displays its availability for that range. List and form controls use the approved tokens.
- My requests: show item, UTC interval, status and a cancel action only for the owner's pending or approved request whose start is in the future.
- Review queue: show pending requests with approve and decline actions to stewards. A failed approval leaves the entry visible with a conflict explanation.
- Forms use visible labels and keyboard-accessible controls. Announce validation and conflict errors in text near the affected action, preserve input on errors and show a visible focus outline.
- Below `640px`, stack controls and use full-width actions; at `640px` and above, place the range controls in a row when space permits.
- Provide loading, empty and error states for each list. A missing session leads to sign-in; it must not appear as an empty catalog.

## `ui-registry.md`

The project is new: **no components have been implemented**. The inventory starts empty.

Before creating a component, consult this registry for an existing suitable component. After adding or changing one, record its implemented name, purpose, source path and reuse guidance. Planned catalog or request components do not belong in the implemented inventory until their paths exist.

## `code-standards.md`

- TypeScript is used on both sides; validate untrusted HTTP inputs and session data on the server even when the browser also validates them.
- Keep request transitions and availability checks in server-side domain code. UI components render data and collect user input; they do not access PostgreSQL directly.
- Use descriptive names for item IDs, UTC instants and request statuses. Avoid logging session tokens or unnecessary personal data.
- Surface validation, authorization and conflict errors to the caller without exposing internal database errors. Do not report a write as successful before its transaction commits.
- Test interval boundaries, concurrent approvals and access control at the server boundary. Test user-visible empty, error and keyboard states in the browser.
- Select compatible dependency versions before F01, record them in the project lockfile and verify the integration against current official documentation.

## `library-docs.md`

These links are examples of authoritative sources; the project must check the version it actually installs. No library integration is claimed to exist yet.

| Technology | Planned use and project-specific rule | Documentation |
| --- | --- | --- |
| TypeScript | Browser and server types; HTTP data still requires runtime validation. | [TypeScript documentation](https://www.typescriptlang.org/docs/) |
| React | Render catalog, request list and review queue; avoid embedding authorization in presentation components. | [React documentation](https://react.dev/learn) |
| PostgreSQL | Store requests and enforce the transactional overlap check. | [PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html) |
| OpenID Connect | Authenticate against the makerspace's existing identity provider; map its verified subject to an active membership. | [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) |

The fictional user's choice of provider SDK and exact versions is deferred until before F01 implementation; verify compatibility then. Do not invent package APIs or credentials in this file.

## `build-plan.md`

**Weak:** “Build booking, then test it.” The task cannot be accepted independently and does not cover competing requests.

**Actionable excerpt:**

### F01 — Membership and catalog

- Deliver sign-in for provisioned identities and a catalog that reports item availability for a valid UTC interval. Equipment and membership records are provisioned outside the app.
- Acceptance: an active member can view an active item; an unknown or inactive identity is denied; an approved overlapping request marks the interval unavailable. Test adjacent intervals as available.
- Dependency: confirm the identity-provider SDK and compatible versions before implementation.

### F02 — Member requests

- After F01, add creation, own-request listing and cancellation. Pending requests do not block other pending requests; submission rejects an interval already occupied by an approved request.
- Acceptance: a valid request appears as pending; invalid or unavailable intervals preserve entered values and store nothing. A member can cancel their own pending or approved request before its start, but cannot view or cancel another member's request.

### F03 — Steward review

- After F02, add the steward queue and approval or decline of pending requests. Recheck approval under the item lock.
- Acceptance: only a steward can review or act on the queue; a declined request cannot be approved. Two concurrent approvals for overlapping requests on one item yield exactly one approval and one conflict, with no partial write.

## `progress-tracker.md`

The fictional project is new; the following planned work has not started. Update this tracker after each completed feature and include evidence rather than assuming completion.

| ID | Status | Evidence or next action |
| --- | --- | --- |
| F01 | Not started | Confirm the identity-provider SDK and compatible versions, then implement and verify membership and catalog access. |
| F02 | Not started | Start after F01; verify request ownership, validation and cancellation. |
| F03 | Not started | Start after F02; verify steward permissions and concurrent approvals. |

Current phase: planning complete; implementation not started. Last completed feature: none. Next: resolve the F01 dependency choice and begin F01.
