---
name: E2E media testing pitfalls
description: False positives and codec limits when the Playwright testing subagent checks audio/images
---

- **Playwright's Chromium has no proprietary codecs**: AAC (.m4a from iTunes previews) and H.264 fail with `NotSupportedError: The element has no supported sources`. MP3 works. Convert site audio to MP3 with ffmpeg (`ffmpeg -i in.m4a -codec:a libmp3lame -b:a 192k out.mp3`) — this also protects codec-less browser builds in production.
- **`new Audio()` elements never appear in the DOM** — a tester reporting "no audio element found" is not evidence of failure; tell it to judge by console errors and UI playing state instead.
- **`loading="lazy"` images false-positive in DOM scans**: `img.complete`/`naturalWidth` checks flag below-the-fold images as broken even though they serve 200. Verify with curl on disk/URL first; instruct testers to scroll slowly and judge visually.

**Why:** an e2e round reported 10 "broken" covers and "no audio" that were all healthy — the only real bug was the AAC codec; chasing the false positives would have wasted a rebuild.

**How to apply:** when a testing-subagent verdict blames media assets, curl the exact URLs and check codecs before changing any code; write test plans that pre-empt these three pitfalls.
