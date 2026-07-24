---
name: Artist media sourcing
description: How to get a musician's real discography, covers, preview audio, photos, and video IDs with zero auth
---

Reliable no-auth sources for building artist sites (used for the 23 BinLaden site):

- **Full discography + 30s previews**: `https://itunes.apple.com/lookup?id=<appleArtistId>&entity=album|song&limit=200`. Returns every release with date, `artworkUrl100` (swap `100x100`→`600x600` for hi-res), and `previewUrl` (AAC .m4a) per song. Beware duplicate store listings of the same single (e.g. two "Heaven Sent" collections) — dedupe by title before claiming a release count.
- **Real top tracks + artist photo**: fetch `https://open.spotify.com/embed/artist/<spotifyId>` and parse the `__NEXT_DATA__` JSON — `entity.trackList` is the true current top 10 with `audioPreview.url` MP3s (p.scdn.co), `visualIdentity.image` has the official artist photos.
- **Real YouTube video IDs**: channel-page scraping and webSearch often return nothing. Instead fetch `https://www.youtube.com/results?search_query=<artist>+official+video` raw HTML with a browser User-Agent and regex `"videoRenderer":{"videoId":"(...)"` + title runs. Filter out other artists' results by title.
- **Photos**: YouTube video thumbnails (`i.ytimg.com/vi/<id>/maxresdefault.jpg`, fallback `hqdefault.jpg`) are real artist stills; channel avatar/banner comes from `yt3.googleusercontent.com` URLs in the channel HTML.

**Why:** yt-dlp failed to install (nix build error) and hotlinked media can 404/geo-block; downloading everything into the artifact's `public/media/` guarantees no missing images/audio.

**How to apply:** any "build a site for artist/band X" request — gather data first, write one typed data file, download all media locally, then hand both to the design pass.
