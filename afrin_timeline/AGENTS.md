# Afrin Timeline Workflow

- When the user says `Begin.` or otherwise asks to continue this workflow, inspect the workflow workspace at `C:\Users\Zachar\Desktop\programs I made\python programs\timeline_maker` before changing files.
- The useful orchestration files live there: `AGENTS.md`, `README.md`, `config.json`, `scripts`, `prompts`, `templates`, `queue`, and `artifacts`.
- The outer orchestration may stay as a simple Python runner in that workspace.
- The inner per-event work must be done by real fresh `codex exec` runs.
- Each event must be handled as its own isolated Codex run.
- Do not process multiple events in one long Codex session.
- Use only the first English `Afrin-Specific Events` column from `timelineData.js` in this project root.
- The first test batch must always be the 3 earliest events.
- English only.
- No hooks.
- Keep the workflow inspectable and rerunnable.
- Research vault root: `C:\Users\Zachar\Documents\Hatra\obsdian_vaults\Zotero Vault`
- Preferred subfolder: `C:\Users\Zachar\Documents\Hatra\obsdian_vaults\Zotero Vault\Afrin\Mohammed Abdo Eli`
- Output notes folder: `C:\Users\Zachar\Documents\Hatra\obsdian_vaults\Zachar\Afrin Timeline`
- For each event, research, writing, and review must happen inside the per-event Codex run.
- The run must save per-event evidence, note, local note mirror, review, and status artifacts.
- Only mark an event as passed if review succeeds.
- Before using `codex exec`, inspect `codex --help` and `codex exec --help` and only use supported flags.
