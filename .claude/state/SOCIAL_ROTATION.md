# SOCIAL_ROTATION.md — TikTok/IG autopilot state

Append-only. The `social-autopilot` scheduled task reads the LAST row to pick the
next slot, then appends its own. Never rewrite history — a repeated slot is a
signal worth seeing.

## The six slots (rotate in order; skip a slot only with a reason logged)

| # | Slot | Audience | What it is |
|---|---|---|---|
| 1 | `arithmetic` | trainer | One number, held. €240 = 20 uur × €12. The sum, never the offer. |
| 2 | `meet-name`  | client  | A named trainer + their specialty. Best-performing local format seen. |
| 3 | `empty-room` | both    | POV walk-in. Empty reads as privacy to a client, availability to a trainer. |
| 4 | `privacy`    | client  | "Geen wachtrij bij de rack." Train alone in a private room. |
| 5 | `collab`     | both    | Co-authored with a renting trainer. Borrowed reach — the biggest lever at our size. |
| 6 | `useful`     | client  | 15s, one cue, filmed by a trainer. Not a workout. |

While studio utilisation is low, **2 of every 3 posts must be trainer-facing**
(slots 1, 3, 5). If the rotation would put three client posts in a row, skip ahead.

## Cadence

**DAILY, auto-posted to TikTok at ~19:00** (operator directive 2026-08-28: "post the
tiktok post, every day must be posted on the best time"). The scheduled task fires
18:40 and POSTS via TikTok Studio in the operator's Chrome — the operator authorized
TikTok auto-posting under the account identity; Instagram stays a manual 2-minute
hand-off. The unposted backlog is the daily queue; new posts are built only when it
runs dry. 19:00 is the default best-time — every 4th run must check the account's own
activity data and move the cron if the data disagrees.
(Superseded: the 2026-08-26 "3×/week, deliberately not daily" cadence — kept for the
record; daily became viable because posting is now automated, so the throughput
constraint that motivated 3×/week is gone.)

## Log

| date | slot | post-id | studio link | posted? | result |
|---|---|---|---|---|---|
| 2026-08-26 | arithmetic | trainer-arithmetic-001 | /social/trainer-arithmetic-001/ | ✅ 26 aug 11:45 | 265 views · 1 like · 0 reacties @ 28 aug 21:35 (plateaued) |
| 2026-08-26 | meet-name | trainer-gezina-001 | /social/trainer-gezina-001/ | ✅ 26 aug 12:23 | 251 views · 2 likes · 0 reacties @ 28 aug 21:35 (plateaued) |
| 2026-08-27 | (outside rotation) | trainer-hamish-2026-08 | /social/trainer-hamish-2026-08/ | ✅ 27 aug 18:32 | 242 views · 0 likes · 1 reactie @ 28 aug 21:35 (plateaued) |
| 2026-08-28 | empty-room | studio-leeg-001 | /social/studio-leeg-001/ | NOT posted — next in daily queue | — |
| 2026-08-28 | privacy | geen-wachtrij-001 | /social/geen-wachtrij-001/ | ✅ 28 aug **15:06** AUTO-POSTED (Chrome MCP → TikTok Studio) | LIVE · 244 views · 0 likes · 0 reacties @ 29 aug 13:30 (plateaued) |

| 2026-08-28 | (19:00 run) | — | — | **NOT posted — deliberate** | quota already met at 15:06; 21:32 is 2.5h past best-time. See finding below. |

| 2026-08-29 | offer/rental (re-cut) | trainer-rental-2026-08 | /social/trainer-rental-2026-08/ | ✅ 29 aug ~13:25 AUTO-POSTED, caption REWRITTEN | in review · **18:40 run must NOT double-post today** |

### Skips + notes

- **2026-08-29 — posted `trainer-rental-2026-08` with a REWRITTEN caption, and the strategy
  behind it changed. Two operator messages drove this: "im wondering how you can improve your
  strategy" + "likes and followers increase are important too."**

  **The 2026-08-28 finding was single-metric and inverts on engagement.** Ranked by
  likes-per-1k-views instead of raw views:

  | post | views | likes | likes/1k |
  |---|---:|---:|---:|
  | Garagedeur / gracht (the space) | 902 | 13 | **14.4** |
  | Gezina (named trainer) | 251 | 2 | 8.0 |
  | "Trainers - own spot in Jordaan?" | 3,129 | 24 | 7.7 |
  | **"Huur vanaf €12/uur" (the 11K)** | 11,000 | 7 | **0.64** |

  The 11K post I made the north star yesterday has the account's WORST like rate — reach
  without resonance. So "re-cut all six slots to offer-led" (yesterday's recommendation)
  would have raised views and crushed likes/follows. **Withdrawn.** Offer-led and
  audience-building are two different jobs needing two different post types (~1 offer : 2
  audience).

- **🔴 ROOT CAUSE FOUND — the account is misclassified, and that beats any framing debate.**
  First-ever look at Analyses → Kijkers/Volgers:
  - **20 followers, all time** (net +2/7d) after 25 posts and ~22K cumulative views.
  - **940 viewers/7d, 894 (95%) NEW** — almost nobody returns.
  - **7 profile views on 1.4K video views (0.5%).**
  - Traffic: Voor jou 92.3% · **Zoeken 3.9%**.
  - "Makers die je kijkers ook bekeken": ESPN · Ziggo Sport · FIFA World Cup · NOS Sport ·
    ESPN MMA · FC Bayern · Red Bull. Co-viewed posts: Islam Makhachev UFC (12M), Verstappen
    vs 100 amateurs (4.5M).
  - Audience **83% Nederland**, 25-34 top age, 55% man.

  So NOT a wrong-country problem — right country, plausible gym demographic. The mismatch is
  **INTENT**: the algorithm files this as *sports entertainment*. People watching MMA
  highlights scroll past a Jordaan studio-rental ad. That is the 240-265 band with ~0 likes.
  The 3.9% from Zoeken is the only correctly-targeted traffic, and its queries are literally
  "personal trainer nederlands" / "Personal training amsterdam".

  **Two traps in this data:**
  1. "Actiefste tijden = 1am-2am" — one date, ~60 viewers, on an 83%-NL audience. Do NOT move
     the cron there; it optimises for the misclassified crowd.
  2. **Under 100 followers TikTok LOCKS the analytics** ("Krijg meer inzichten wanneer je 100
     volgers hebt"). The scheduled task's every-4th-run best-time check is therefore
     *impossible*, not merely skipped. Don't fake it — fix the task text instead.

- **What changed in today's caption** (facts all re-verified this run: €12 half / €17 full per
  CLAUDE.md L25-26; Egelantiersgracht 424 + 06:00-22:00 per L7/L10; the €600/mnd + min-5-uur
  competitor facts are live-verified 2026-08-14, unnamed, peildatum on-page; "gratis
  proefsessie" is live on /nl/studio-huren; no "proefles", no "0% commissie", no dumbbell
  weights):
  1. **Search-intent lead.** Line 1 + title now open "Personal trainer in Amsterdam en je
     zoekt een eigen studio?" — matching the queries that already convert in Zoeken.
  2. **A follow-reason, which the account has never had.** "Volg voor vrije uren in de studio
     en de trainers die er werken." 25 posts with no reason to follow is why 22K views made
     20 followers.
  3. **Niche hashtags to fight the misclassification** — #personaltraineramsterdam
     #personaltrainer #personaltraining #krachttraining lead; generic #amsterdam demoted.

  ⚠️ The hand-off page `public/social/trainer-rental-2026-08/index.html` still carries the OLD
  caption — the IG version will differ from what went out on TikTok until it is updated.

- **2026-08-28 (19:00 scheduled run, fired 21:32) — NO POST, on purpose. Two reasons, then
  the finding that matters.** (a) The daily quota was already met: `geen-wachtrij-001` went
  out at **15:06** (the log said ~16:45 — corrected above) and is **live, Iedereen, out of
  review, 240 views**. (b) The run fired ~2h50m late, so the 19:00 best-time window was gone;
  an 8th post at 21:30 would have been a second post in one day at a bad hour.

- **🔴 THE FINDING — the current editorial rotation is beaten ~12–45× by the account's own
  proven offer-led format.** Sorted the whole account by Weergaven (first time this has been
  done). The ranking:

  | # | post | date | type | views | likes |
  |---|---|---|---|---:|---:|
  | 1 | "Private gym in de Jordaan. **Huur vanaf €12/uur**. Probeer eerste…" | 1 jan | photo | **11.0K** | 7 |
  | 2 | "**Freelance Personal Trainer?** Train your clients in a private studio…" | 2 nov 2025 | video 0:24 | **3,262** | 4 |
  | 3 | "**Trainers — want your own spot in Jordaan?** 🏋️ Come give your own…" | 29 aug 2025 | video 0:14 | **3,129** | 24 |
  | 4 | "Private gym in de Jordaan. **Huur volledige studio €17/uur**…" | 2 jan | photo | 1,559 | 1 |
  | 5 | "🚪 Garagedeur die direct aan de gracht opengaat" | 23 mei | photo | 902 | 13 |
  | — | **the seven Aug 24–28 posts (this rotation)** | 24–28 aug | photo carousels | **240–265** | 0–2 |

  All four top posts **lead line 1 with the offer and a price, addressed to trainers**. Every
  post this rotation has produced instead leads with an atmospheric/editorial hook
  (arithmetic, meet-name, empty-room, privacy, spotlight) and buries the offer — and every
  single one lands in a 240–265 band.

  **Why this is not just the age confound.** Older posts have had longer to accumulate, which
  is real. But the seven August posts are 1–4 days apart and sit at 249 (24 aug), 243, 265,
  251, 242, 240 (28 aug) — essentially FLAT with age. TikTok front-loads distribution; a post
  headed for 3,000 does most of it inside 48h. These plateaued at ~245 within a day and
  stopped. The band is too tight across six different creative frames to be content variation
  — it reads as the initial test-audience ceiling, never graduated past.

  **Consequence for the queue:** tomorrow's post switches from `studio-leeg-001` (empty-room,
  atmospheric hook "Achter deze deur is niemand") to **`trainer-rental-2026-08`**, whose
  caption opens *"Trainer in Amsterdam en je zoekt een eigen plek?"* — the same
  direct-question-to-trainers shape as #2 and #3 above. `studio-leeg-001` stays built and
  queued behind it; it is not discarded.

  **NOT a video-vs-slides question — that one is settled, leave it settled.** Two of the top
  four are videos, but they are from Aug/Nov **2025**, a different account era; and the
  outright #1 (11.0K) is a **photo carousel**, which is consistent with the operator's
  2026-06-04 decision *"video is the problem, slides perform better"* (TaskPrio
  `mpzexr1zrdijtd`). Do not reopen it on the strength of 2025-era posts. The variable that
  actually separates the winners from the 240–265 band is the **offer-led first line**, not
  the medium — #1 is a photo and leads with "Huur vanaf €12/uur".

  **What to change instead:** re-cut the six editorial slots around offer-led framing (price
  + trainer address in line 1) before more carousels are spent on atmospheric hooks. That is
  an operator call on the rotation doc, not an autopilot one.

- **Also reconciled: the log did not know about 3 more live posts.** "Mensen stoppen zelden met
  trainen…" (25 aug, 243), "Dit huur je voor €12 per uur" (24 aug, video 0:12, 249), and the
  23 mei garagedeur post (902). Account total is **25 Berichten**; this log tracks 8. The
  Studio list remains the truth — reconcile every run.

- **2026-08-28 RECONCILIATION — the log was stale, TikTok was ahead.** The Studio
  Berichten list showed 3 posts live that this log had as "operator —": arithmetic
  (26 aug, 265 views), gezina (26 aug, 251), hamish (27 aug, 242, never logged here
  at all). All three sit in the 242–265 view band — a consistent organic baseline,
  well below the 836–1,553 target band. THE LIST IS TRUTH; reconcile against it at
  the START of every run (now step 2 of the scheduled task). First auto-posted post:
  geen-wachtrij-001, via file_upload into TikTok Studio's Foto's tab — the mssdk
  block only kills the programmatic API, not the UI path.

- **2026-08-28 (2nd run, operator-triggered) — slot 4 `privacy` taken in order.** Not a
  skip: privacy after empty-room does not make three client posts in a row (empty-room
  is trainer-eligible). Sibling sessions also built `open-gym-september-2026`,
  `studio-tour-2026-08` and `trainer-hamish-2026-08` OUTSIDE this rotation — none is a
  privacy post, so no duplication; they are their own queue. The unposted backlog is
  now 7 hand-off pages; the constraint is posting throughput, not supply.

- **2026-08-28 — skipped slot 2 `meet-name`.** It had already been built two days
  earlier (`trainer-gezina-001` + an English variant) but was never logged here, so
  the pointer was stale rather than the slot being due. Building a second one would
  have duplicated it. Went to slot 3 `empty-room`, which also keeps the
  2-of-3-trainer-facing rule intact (arithmetic → empty-room = 2/2 trainer-eligible)
  and matches the money lever: rental is ~93% of revenue at ~50% utilisation.
  **Lesson for the log: post first, then log — an unlogged post makes the next run
  repeat it.** `trainer-gezina-001` is backfilled below for that reason.
- **Backfill, 2026-08-26 — slot 2 `meet-name`, `trainer-gezina-001`** (+ `-en`
  variant). Built but not logged at the time. Status: operator to post.

| 2026-09-01 | empty-room | studio-leeg-001 | /social/studio-leeg-001/ | ⏰ **SCHEDULED** 31 aug 21:10 → posts **1 sep 19:00** (TikTok native) | verified in Studio: "🕐 1 sep, 19:00" badge, 0 views |

### 2026-08-31 — posting model changed: buffer, not daily-post

**2 days were missed (30 + 31 aug). Measured on-platform, not inferred:** TikTok
Studio shows the previous post at **29 aug 14:55** and **Concepten 0**. Two causes,
both silent:

1. The `social-autopilot` scheduled task described at the top of this file **did not
   exist** — verified in both the tasks directory (55 tasks, zero matching "social")
   and the scheduler registry. The 26–29 aug posts were a *running interactive
   session* driving Chrome MCP by hand. When that lane hit its weekly usage cap on
   29 aug 16:13, posting stopped and nothing reported it.
2. TikTok's session had **expired** in the operator's Chrome, so even a working task
   could not have posted.

**The fix inverts the model.** The task no longer posts one item per run — it keeps
**TikTok's OWN native schedule ≥5 days deep**. Six things can each kill a run (usage
cap, app closed, drive unmounted, Chrome logged out, backlog dry, TikTok UI change);
with a buffer, all six become survivable because the posts already live inside
TikTok. Any single successful run refills it. Only 5+ consecutive failed days break
the chain, versus one before.

**Scheduling capability — MEASURED 2026-08-31, do not re-guess it:** TikTok Studio
does support native scheduling ("Tijdstip van plaatsing" → *Plannen*). The date
picker offered **1–5 sep** from 31 aug, i.e. a **~5-day forward window**, NOT the
~10 days assumed when the task was written. Minutes snap to 5-minute steps. A
one-time consent ("Mag je video worden opgeslagen voor geplande plaatsing?") must be
accepted before the first scheduled post. **So the ≥5-day buffer target is at the
very edge of what TikTok allows — treat 4 days as the practical ceiling.**

Backlog on disk at this point: `studio-leeg-001` (now scheduled), plus
`open-gym-september-2026` and `studio-tour-2026-08` (both have reel.mp4) = 2 more
days available without building anything new.

## 2026-09-01 — MEASURED: the real backlog is 2 posts, not 18

Counted every dir in `public/social/` for (unposted) + (caption) + (asset).
A post is only queueable if it has BOTH a rendered asset AND a caption.

**Captions live in the post's own `index.html`** inside a `<pre>` caption-box —
NOT only in `docs/social/<id>/POST.md`. Only 4 POST.md files exist and 3 are
already posted, so judging the backlog from `docs/social/` alone reports
"dry" incorrectly. Check the `<pre>` block.

TRULY READY (unposted + caption + asset) — 2:
  - studio-tour-2026-08        | reel.mp4 | trainer-facing | "Wat je precies huurt voor EUR12 per uur."
  - open-gym-september-2026    | reel.mp4 | client-facing  | "Vier mensen. Meer niet."

HAVE ASSETS BUT NO CAPTION — 8 (need a caption written before they are queueable):
  education-squat-mistakes-001, intake-pitch-001, open-gym-pitch-001,
  pt-how-to-choose-001, trainer-commission-math-001, trainer-gezina-001-en,
  trainer-spotlight-alex-001  (+ photo-library, not a post)

CONSEQUENCE: the buffer can reach at most 1 sep (scheduled) + 2 more days.
After ~3 sep the queue is dry unless captions are written for the 8 above.
That is the true cause of future missed days — not the scheduling mechanism.

Per the 2-of-3 trainer-facing rule and 1 sep being client-facing (empty-room),
the intended order is:
  2 sep -> studio-tour-2026-08      (trainer-facing)
  3 sep -> open-gym-september-2026  (client-facing, September-themed)

NOT SCHEDULED THIS SESSION: `file_upload` (Chrome MCP) reported
"Uploaded 1 file(s)" on three attempts but `input.files` stayed `[]`
immediately after each — verified against the only file input on the page
(`accept="video/*"`). Downloads, `resize_window` and shell `rm`/`kill` were
also non-functional in the same window while `curl` recovered mid-session,
so this looks like transient environment degradation rather than a TikTok
or capability change. Uploads demonstrably worked on 28/29/31 aug.
RETRY the upload before assuming the pipeline is broken.

## ~~2026-09-01 18:47 CEST — TOP-UP RUN FAILED: `file_upload` is broken~~ **(SUPERSEDED 2026-09-02 01:30 — `file_upload` is NOT broken. Root cause found + workaround proven. See '2026-09-02 — SOLVED' below. Everything in this section about the TOOL being broken is WRONG; the diagnosis of what was RULED OUT is still valid.)**

| date | slot | post-id | studio link | posted? | result |
|---|---|---|---|---|---|
| 2026-09-02 | studio-tour | studio-tour-2026-08 | /social/studio-tour-2026-08/ | ❌ **NOT scheduled** — upload blocked | `file_upload` returns success, `input.files` stays `[]` |
| 2026-09-03 | open-gym | open-gym-september-2026 | /social/open-gym-september-2026/ | ❌ **NOT attempted** — pipeline blocked upstream | — |

**Buffer BEFORE: 0 future days. Buffer AFTER: 0 future days.**
Only `1 sep 19:00` (studio-leeg-001) was scheduled, and that fires TODAY (run was
18:47, 13 min before). Verified twice in Studio, still 0 views both reads.
**From 2 sep the queue is EMPTY.** This is the <2-day LOUD-ALERT condition.

### ~~The blocker, diagnosed~~ **(WRONG CONCLUSION — see SOLVED section. The elimination list below is still correct; the conclusion drawn from it was not.)**

`mcp__claude-in-chrome__file_upload` reports `"Uploaded 1 file(s) ... (1338 KB)"`
and **does not write to the DOM**. Reproduced the prior session's finding exactly.

Positive control each time: `document.querySelector('input[type=file]').files.length`
→ **0**, four times:

| # | variation | files after |
|---|---|---|
| 1 | original tab, ref_81 | 0 |
| 2 | same tab, re-found ref | 0 |
| 3 | **brand-new tab**, fresh ref | 0 |
| 4 | input forced visible (320×44 rect), fresh upload | 0 |

Ruled OUT, with evidence — do not re-test these:
- **Auth** — logged in; 25 posts + avatar render; scheduled view reads fine.
- **TikTok-side rejection** — `read_console_messages(onlyErrors)` → **zero errors**.
- **TikTok UI change** — upload page identical to 31 aug; single `input[type=file]`,
  `accept="video/*"`, not disabled.
- **File unreadable** — the tool reports the correct size (1338 KB ≈ 1369991 B), so
  it reads the file fine; it fails on injection.
- **Backlog dry** — 2 posts fully ready (asset + caption), captions re-verified in
  each post's `index.html` `<pre>` block this run.

⚠️ **`offsetParent === null` on this input is a FALSE hidden-signal.** The input is
`position:fixed`, and fixed elements always report `offsetParent === null`. It has a
real bounding rect. Do not chase "the input is hidden" — it is not.

Alternative mechanism also tried and failed: in-page
`fetch('https://sculptclub.nl/social/studio-tour-2026-08/reel.mp4')` → `File` →
`DataTransfer` → `input.files`. Asset **is** live (HTTP 200, `video/mp4`,
content-length 1369991 = exact byte match with disk), but the fetch dies on
**CORS** (`TypeError: Failed to fetch`) — Cloudflare Pages sends no
`Access-Control-Allow-Origin` for `/social/*`.

### Deliberately NOT done

- **No `_headers` CORS deploy.** Adding `Access-Control-Allow-Origin` to `/social/*`
  would unblock the JS-injection path, but that is a permanent infra change to a live
  site to route around a client-side tool bug that **worked on 28, 29 and 31 aug**.
  Wrong tier of fix for a transient failure. Reconsider only if `file_upload` is still
  dead after the next run.
- **No base64 injection.** 1.37 MB → ~1.8 MB base64 ≈ 460K tokens. Not viable.
- **No retry-loop.** Stopped at 4 attempts + 2 alternative mechanisms per the task's
  "log, alert, exit" rule.

### Next run

1. **RETRY `file_upload` FIRST** — it worked 3 of the last 5 days; assume transient.
   Verify with `input.files.length`, never the tool's return string.
2. If it works, schedule **2 posts**: `studio-tour-2026-08` (trainer-facing) then
   `open-gym-september-2026` (client-facing) on the first two uncovered days.
3. Buffer ceiling is still **2 days** after that. The 8 asset-only posts
   (`education-squat-mistakes-001`, `intake-pitch-001`, `open-gym-pitch-001`,
   `pt-how-to-choose-001`, `trainer-commission-math-001`, `trainer-gezina-001-en`,
   `trainer-spotlight-alex-001`) still have **no captions** and **no video** — they are
   `instagram-*.png` only. Captions AND a reel render are both needed.

**Rotation note:** the 2-of-3 trainer-facing rule cannot be met from the current
backlog — it holds exactly one trainer-facing and one client-facing post. Logged as a
known deviation, cause = backlog composition, not slot drift.

## 2026-09-02 01:30 CEST — **SOLVED: uploads work. Root cause + reusable recipe.** Buffer 0 → 1

| date | slot | post-id | studio link | posted? | result |
|---|---|---|---|---|---|
| 2026-09-02 | studio-tour | studio-tour-2026-08 | /social/studio-tour-2026-08/ | ⏰ **SCHEDULED 19:00** (TikTok native) | ✅ verified in Studio: badge "2 sep, 19:00" |
| 2026-09-03 | open-gym | open-gym-september-2026 | /social/open-gym-september-2026/ | ❌ not scheduled — **TikTok session logged out mid-flow** | video uploaded + caption typed + date/time set; logout killed it before submit |

**Buffer BEFORE: 0 future days. Buffer AFTER: 1 future day (2 sep).**

### 🔴 THE ACTUAL ROOT CAUSE — `file_upload` was never broken

I (and the 2026-09-01 session before me) concluded "the tool is broken" from repeated
failures **without ever running a positive control**. That was the real mistake.

The control that settled it: inject a **visible** `<input type=file>` into the same page
and upload to *that*.

| target | result |
|---|---|
| my injected input (visible, 340×40) | **files = 1**, correct size, `change` fired ✅ |
| TikTok's own input | files = 0 ❌ |

Same tool, same call, same file, same page — so the tool works.

**Why TikTok's input fails:** it is `display:none` with a **0×0** box. CDP's
`DOM.setFileInputFiles` silently no-ops on it and still returns
`"Uploaded 1 file(s)"`. **The success string is not evidence — only `input.files.length` is.**

### ✅ THE RECIPE THAT WORKS (proven twice: studio-tour scheduled, open-gym uploaded)

```js
// 1. inject a VISIBLE probe input
let p=document.createElement('input'); p.type='file'; p.id='probeInput';
p.setAttribute('aria-label','PROBE UPLOAD INPUT');
p.style.cssText='position:fixed;top:150px;left:20px;width:340px;height:40px;z-index:2147483647;display:block;';
document.body.appendChild(p);
// 2. find ref for "PROBE UPLOAD INPUT" -> file_upload(paths:[...]) -> VERIFY p.files.length===1
// 3. hand the File to TikTok's input:
const t=document.querySelector('input[type=file]:not(#probeInput)');
const dt=new DataTransfer(); dt.items.add(p.files[0]);
t.files=dt.files;
t.dispatchEvent(new Event('input',{bubbles:true}));
t.dispatchEvent(new Event('change',{bubbles:true}));
// 4. WAIT ~15s -> editor appears ("<name>.mp4 1080P Geüpload")
```

### Traps that cost time — do not repeat

1. **`offsetParent === null` is NOT a hidden-signal.** `position:fixed` always reports
   null. Check `getComputedStyle().display` + `getBoundingClientRect()` instead.
2. **JS reads of the date/time fields LAG the UI.** After clicking hour/minute, a JS
   read returns the OLD value; the screenshot shows the new one. **Trust the screenshot**,
   or re-read after ~1s. I nearly "re-fixed" a time that was already correct.
3. **CSP `connect-src` blocks ALL cross-origin fetch on TikTok** (measured via
   `securitypolicyviolation`: `https://api.github.com` AND `http://127.0.0.1` both blocked).
   So no in-page fetch bridge — and **a CORS `_headers` deploy to sculptclub.nl would have
   been wasted work.** Verified before spending it.
4. **`osascript` has no Accessibility permission** (`-25211`), so the native file dialog
   cannot be driven. Granting it is a system security setting — operator-only, not worth it
   now that the recipe above works.
5. **Chrome cannot reach a server on this shell's `127.0.0.1`** (see co-location note below).
6. **The extension disconnects mid-flow.** It dropped twice. After a reconnect,
   **re-verify what you typed** — my first open-gym caption silently went nowhere and the
   field still read `open-gym` (8/4000). Always re-read the caption before submitting.

### Why 3 sep is not scheduled

TikTok logged the session out (`/tiktokstudio/*` → `/login`) while post #2 was fully
staged. Logging back in needs credentials — a hard gate I will not cross. Everything up
to the final "Plannen" click was done and is now lost.

### Next run

1. If Studio redirects to `/login`, **stop** — operator must sign in. Nothing else works.
2. Otherwise use the RECIPE above. Schedule `open-gym-september-2026` on the first
   uncovered day at 19:00.
3. **The date picker offers the whole month** (1–30 sep selectable on 1 sep), NOT the
   ~5-day window recorded on 2026-08-31. That earlier note is wrong — the buffer can be
   built much deeper than 4 days once the backlog allows.
4. Backlog after open-gym ships: **empty**. The 8 asset-only posts still need captions
   AND a reel render (they are `instagram-*.png` only).

### Co-location note (for the 🤖 SculptClub session that asked)

- my shell public IP = **95.96.163.30**
- my browser public IP = **95.96.163.30** → they MATCH (theirs did not)
- BUT Chrome could not load `http://127.0.0.1:<port>` served by this shell, so **same
  public IP ≠ same machine**. Same NAT, probably different host. I could not prove a
  shared filesystem, so I did not attempt the WhatsApp download.
- Useful asymmetry: **`file_upload` reads THIS shell's filesystem fine** (upload direction
  works). The download direction (browser → this filesystem) is unproven.
- Also relevant to them: **web.whatsapp.com will have the same `connect-src` CSP wall**,
  so a fetch-to-local-server bridge will not work there either.

## 2026-09-02 01:50 — Autopilot spec rewritten (`~/.claude/scheduled-tasks/social-autopilot/SKILL.md`)

Backup kept at `SKILL.md.bak-2026-09-02`. What changed, and why each earned its place:

1. **Step 0 = check login FIRST.** Discovering the logout at step 4 cost a fully-staged
   post tonight. 30-second check, saves the whole run.
2. **The upload recipe is now IN the task** (visible probe input → `file_upload` →
   `DataTransfer` → change → wait 15s), plus the rule that `"Uploaded 1 file(s)"` is not
   evidence — only `input.files.length` is.
3. **Photo-carousel path added.** There is no mp4 generator in this repo and no ffmpeg on
   this machine, so image-only packs can NEVER become reels. But TikTok has a **Foto's**
   tab, and the packs are explicitly built as "3 slides → Foto's". This is what unlocks
   most of the backlog. Previously those 7 packs were treated as unusable.
4. **Caption-writing is now an explicit step**, to run *even when the run is blocked on
   login* — it is the actual bottleneck and needs no TikTok session.
5. **Traps section** — the 6 that cost real time, incl. "run a positive control before
   concluding a tool is broken" (that one error cost more than all the others combined).
6. **Instagram** noted as deliberate future scope, not started. Assets are already
   rendered at 1:1 (`instagram-*.png`), so it is ready when the operator asks.

### Ground truth verified this session (live sculptclub.nl/nl/trainers, HTTP 200)

13 trainers · sessions from €45 · 5.0 on Google · first intake free.
**Alex, Gezina, Hamish and Roberta are all CURRENT** — the trainer-spotlight packs name
real people and are safe to caption.

### Captions deliberately NOT written yet

The 7 remaining packs are photo carousels whose slide COPY lives inside the PNGs, not the
HTML. Writing a caption that asserts what is on each slide would be guesswork, and a
mismatch between caption and image is exactly the sloppiness these rules exist to prevent.
Next run: open each pack's `/social/<id>/` preview page, read the 3 slides, then write the
caption into that post's `index.html` `<pre>` block.

### The two remaining blockers, ranked

1. 👨🏻‍🔧 **TikTok session logged out** — operator sign-in. Blocks every TikTok action.
   ~30 seconds. Nothing else in this pipeline works until then.
2. **7 packs need captions** — brain-doable, ~1 run, unlocks a 7-day buffer.
