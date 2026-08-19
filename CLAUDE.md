# CLAUDE.md — MEDIUM TIER (project-level)

> Full discipline tier for complex, multi-session projects.
> Combines Superpowers methodology, anti-hallucination verification, persistent Development History, and explicit Context Window Management.
> *Note: This tier skips Graphify and Context7. For those, upgrade to COMPLEX.*
> Global engineering principles (RED RULES, identity) are in `~/.claude/CLAUDE.md` — apply those first.

---

## MANDATORY WORKFLOW (Per Task)

```
[1. START]      → Read user request
                     ├─ If prompt is clear → Self-correction restatement (restate/assumptions/risks)
                     └─ If prompt is sloppy → Offer /prompt-master refinement
                     │
[2. THINK]      → Three parallel processes:
                     ├─ /use-superpowers
                     │    ├─ brainstorming → writing-plans → TDD → review → verify
                     │    └─ verify-before-claiming (anti-hallucination gate)
                     ├─ subagent-driven-development
                     │    ├─ dispatch fresh implementer per task (Task tool)
                     │    ├─ per‑task spec + quality review
                     │    └─ fix loop (max 5 rounds) with scoped re‑review
                     └─ /development-history
                          └─ read .development-history/ for prior decisions
                     │
   ─── 💡 COMPACT BOUNDARY: update _ACTIVE-TASK.md, then /compact ───
                     │
[3. AGENT WORK] → Subagents + TDD RED-GREEN-REFACTOR implementation cycle
                     │
   ─── 💡 COMPACT BOUNDARY: update _ACTIVE-TASK.md, then /compact ───
                     │
[4. VERIFY]     → Run tests + linter + typecheck; READ output before claiming done
                     │
[5. RESULT]     → Post-implementation cleanup:
                     ├─ Create report in `.development-history/YYYY-MM-DD-HH-mm-title.md`
                     ├─ Delete `_ACTIVE-TASK.md`
                     └─ Run /clear to reset context for next task
```

---

## PHASE BREAKDOWN & SKILL INTEGRATION

### Phase 1: START — Sloppy Prompt Detection & Self-Correction
Before executing non-trivial requests, perform the **Sloppy Prompt Detection Gate**:

1. **Read the user's prompt.** Classify as one of:
   - **Clear** — specific task, scope, constraints, or acceptance criteria are present.
   - **Sloppy** — vague task verb, emotional description, no file scope, no acceptance criteria.

2. **If CLEAR:** perform the global self-correction gate:
   - **Restate** the request in 1-2 sentences.
   - **List assumptions** you are making.
   - **Identify ambiguities & risks**.
   - **Ask 2-5 clarifying questions** if anything is still unclear.

3. **If SLOPPY:** flag explicitly to user:
   - Tell user: `"Prompt kamu terlalu ambigu/pendek. Mau gw refine pakai /prompt-master dulu, atau gw restate sendiri?"`
   - If user confirms `/prompt-master` → invoke it.
   - If user asks for self-restate → perform restatement, identify missing scope, ask clarifying questions.
   - Do NOT proceed to THINK until the prompt is sharpened.

- Trigger self-correction manually anytime with `/clarify`.

### Phase 2: THINK (Two Processes)

THINK runs two processes: **Superpowers** (drives the work) and **Development History** (provides context).

#### Process A: `/use-superpowers` (`superpowers:SKILL`)
Superpowers drives the entire development lifecycle.

1. **Superpowers core skills** (always run, in order):
   - `brainstorming` → clarify requirements, explore design
   - `writing-plans` → produce detailed implementation plan
   - `test-driven-development` → RED-GREEN-REFACTOR
   - `requesting-code-review` → review against plan
   - `verification-before-completion` → final completion gate

2. **`verify-before-claiming` (used WITHIN Superpowers):**
   - Superpowers enforces `Inspect → Act → Verify → Report` on every claim.
   - Claims like `fixed`, `working`, `completed` require fresh verification evidence.
   - Reduces hallucination: Superpowers cannot claim success without proof.

**For debugging:** When Superpowers encounters a bug or failure, it invokes `systematic-debugging` internally — gather evidence, reproduce, identify root cause, add regression test.

#### Process B: `/development-history` (`development-history`)
Runs in parallel with Superpowers to provide historical context:
- Check `.development-history/` for past technical decisions, failed approaches.
- Use relevant reports to inform Superpowers' brainstorming and planning.
- Historical info is supporting context, NOT proof of current state — always verify against current project.

### Phase 3: AGENT WORK & IMPLEMENTATION
- **Worktree-Driven Development (WDD)**: Prefer running subagents with worktree isolation (`isolation: "worktree"` when calling `Agent`, or `EnterWorktree` for the current session when starting a new task/branch) to keep the working tree clean, prevent concurrent write conflicts, and isolate builds. Always exit the worktree clean with `ExitWorktree` when done.
- Use subagents (`Task` tool) for parallel tasks, deep reviews, or isolated investigations.
- Follow strict TDD RED-GREEN-REFACTOR cycle for all code changes.
- Reference all code as `file_path:line_number` for precise navigation.

### Phase 4: VERIFICATION GATE
- Run the full test suite (`npm test`, `php artisan test`, `pytest`, `mvn test`).
- Run linter and typechecker (`tsc --noEmit`, `eslint`, `phpstan`).
- **READ the actual output** — never assume a test passed.
- Enforce llm-safe-haven security checks.

### Phase 5: RESULT & HISTORICAL RECORDING
After verification passes:
1. **Create Development History Report:**
   - Path: `.development-history/YYYY-MM-DD-HH-mm-short-title.md`
   - Content: Task summary, previous context, changes made, files affected, technical decisions, verification performed, final result, known limitations.
   - Must be written in full English, lowercase kebab-case title.

2. **Reset Context for Next Task:**
   - Run `/clear` to start the next task with a fresh context window.

---

## CONTEXT WINDOW MANAGEMENT & COMPACTION STRATEGY

Compaction and session resets destroy in-context memory. Durable state must live **on disk**, not in the conversation.

### The Durable State File

Maintain one working-state file per active task:

```
.development-history/_ACTIVE-TASK.md
```

This file is the single source of truth that survives `/compact`, `/clear`, crashes, and subagent dispatch.

**Required structure:**

```markdown
# ACTIVE TASK: <short title>
Updated: <YYYY-MM-DD HH:mm>
Status: IN_PROGRESS | BLOCKED | VERIFYING | DONE

## Goal
<1-2 sentences: what "done" means, in verifiable terms>

## Approved Plan
1. <step> — [ ] pending / [x] done
2. <step> — [ ] pending / [x] done

## Files Touched
- `path/to/file.ext:line` — <what changed and why>

## Verification Evidence
- <command run> → <actual result, not assumed>

## Decisions & Constraints
- <decision> — <reason>

## Open Questions / Blockers
- <question awaiting user answer>

## Next Action
<the single next concrete step, written so a fresh session can resume cold>
```

### Write Triggers (non-negotiable)

Update `_ACTIVE-TASK.md` **before** any of these:
1. Running `/compact` or `/clear`
2. Dispatching a subagent via the `Task` tool
3. Completing any numbered plan step
4. Asking the user a blocking question
5. Any single response that touched 3+ files
6. Ending a work session for any reason

### Read Triggers (non-negotiable)

Read `_ACTIVE-TASK.md` **first**, before any other action, when:
1. A session starts and the file exists with `Status != DONE`
2. Context was just compacted (the summary is not trustworthy for detail)
3. The user says "continue", "lanjut", "resume", or references earlier work
4. You cannot recall a decision that the conversation implies was already made

**Never re-derive state from the compaction summary alone.** Compaction summaries lose file paths, line numbers, and verification evidence. Re-read the file.

### Subagent Handoff Rule

Subagents do not inherit your context. When dispatching:
- Paste the relevant sections of `_ACTIVE-TASK.md` into the subagent prompt verbatim.
- Require the subagent to return: files changed, commands run, actual output, and any deviation from plan.
- Merge that return into `_ACTIVE-TASK.md` immediately on receipt.

### Compaction Boundaries

Compact at natural seams, not mid-step:
- **After planning, before implementing** — drop exploration chatter, keep the Approved Plan.
- **After implementing, before verifying** — drop verbose diffs and edit logs.
- **After the history report is written** — `/clear` for the next task.

Never compact while a test run, migration, or multi-file edit is half-finished. Finish the step, write state, then compact.

### Budget

- Keep context below ~50% capacity during normal work.
- Claude Code auto-compacts near 80% — treat auto-compaction as a failure of discipline, not a feature.
- Avoid loading large raw logs, full dependency trees, or unrelated history into context. Summarize into `_ACTIVE-TASK.md` instead.

### Completion

When `Status: DONE`:
1. Write the final `.development-history/YYYY-MM-DD-HH-mm-title.md` report.
2. Delete or archive `_ACTIVE-TASK.md` so the next task starts clean.

---

## TIER SWITCHING
- `/switch-small` — minimal (fast, minimal rules)
- `/switch-complex` — everything in MEDIUM plus Graphify knowledge graph and Context7 live docs
- `/tier` — check active tier for current project

---

## PROJECT NOTES

See `AGENTS.md` at project root for code style, component conventions, file organization, and stack details for this React + TypeScript portfolio.

## Agent skills

### Issue tracker

Issues live in this repo's GitHub Issues (FarhanAdiyasa/classic-fb-porto), managed via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context layout — `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
