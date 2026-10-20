# cc-dogfood-fixture

A tiny Node project used only to exercise Code Conductor runs (R1, R2, gate output modes).

- No dependencies: `npm test` runs Node's built-in test runner (`node --test`).
- `node_modules/.gitkeep` is committed so the Node gate's prerequisite is met without installing anything.
- Keep every change small: one function, one test. The point is the run, not the code.
