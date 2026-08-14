
## Ship 2026-05-27T13:53:51Z — Same-page duplicate images audit + fix
- 6 files · 54 ins / 12 del · commit d970708 · deploy dpl_9G8SvcdCm2VMDciVASbSC8Nmfuea READY 60s
- Root cause: 3 page-pairs (word-trainer · open-gym · studio-huren) rendered same image in hero rotation AND gallery on the same page
- Operator-trigger: screenshot showed 2 near-identical dark barbell shots on /nl/word-trainer mobile
- Fix: swapped gallery entries to visually-distinct, non-hero images on all 3 page-pairs
- Verify: fleet grep audit 0 dups · Chrome MCP live verify 0 dups on all 3 page-pairs
- PromptPrio: task mpo4k7cnt8r1ph (archive tier candidate)
2026-08-14 20:xx | revenue-sprint-autopilot | rental-recovery | recon-wf(5 agents)+build-wf(3 agents)+inline | fleet | standard | @strategist+@distributor-in-wf | auto | ~7200 | success — 40 files shipped (commits 8f73c19/ab3c793), 7 operator cards, deploy blocked on Vercel suspension (operator card filed)
