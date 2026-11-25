# Roast Your Own Agent

[![make.fun · u-lively-harbor-25-4493-roast-your-own-agent-5568be54](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54?utm_source=github&utm_medium=readme&utm_campaign=u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/alfian-triadi/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/alfian-triadi/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54?utm_source=github&utm_medium=readme&utm_campaign=u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

Entry for the make.fun bounty [Roast Your Own Agent](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54).

## The entry (108 characters)

> My agent apologized 12 times, clarified twice, ran 9 tools, then confidently handed me back my own sentence.

## How it works

`main.ts` (Node 22, no dependencies) defines the one-line roast, validates it
(single line, 1–140 UTF-8 characters, not whitespace-only, no leading/trailing
whitespace), creates the output directory if needed, and writes the text to
`entry.txt` under `MAKEFUN_OUTPUT_DIR` (default `out`).

```bash
node main.ts
cat out/entry.txt
```
