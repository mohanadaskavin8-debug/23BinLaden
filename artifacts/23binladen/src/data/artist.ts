// ─── 23 BINLADEN — REAL ARTIST DATA ───────────────────────────────
// All media files are downloaded locally into /public/media/ — never hotlinked.
// Sources: Apple Music (iTunes API), Spotify artist page, YouTube channel @23binladenn

const media = (p: string) => `${import.meta.env.BASE_URL}media/${p}`;

export const LINKS = {
  youtube: "https://www.youtube.com/@23binladenn/videos",
  instagram: "https://www.instagram.com/real23binnymontana/",
  spotify: "https://open.spotify.com/artist/4opjs7fSDObYx57qmLzGuu",
  appleMusic: "https://music.apple.com/us/artist/23-binladen/1549249490",
};

export const PHOTOS = {
  spotifyProfile: media("artist/spotify-profile.jpg"), // official Spotify artist photo (640x640)
  ytAvatar: media("artist/yt-avatar.jpg"), // YouTube channel avatar (900x900)
  ytBanner: media("artist/yt-banner.jpg"), // YouTube channel banner (wide)
  // Real photos of him = video stills, keyed by video ID below (media/thumbs/{id}.jpg)
};

export interface Video {
  id: string; // YouTube video ID — verified real & public
  title: string;
  thumb: string; // local thumbnail — real still of the artist
}

export const MUSIC_VIDEOS: Video[] = [
  { id: "c1SUzDJN5bo", title: "Caught Him (x JackBoi)", thumb: media("thumbs/c1SUzDJN5bo.jpg") },
  { id: "FFtuVWvxc8s", title: "Plan (x ItzLilDrench x JackBoi)", thumb: media("thumbs/FFtuVWvxc8s.jpg") },
  { id: "hQj44jW_Rkc", title: "Gen 5", thumb: media("thumbs/hQj44jW_Rkc.jpg") },
  { id: "FLlLSdkjYIo", title: "Brim", thumb: media("thumbs/FLlLSdkjYIo.jpg") },
  { id: "cZZ-RpbNReo", title: "Damn", thumb: media("thumbs/cZZ-RpbNReo.jpg") },
  { id: "ivx5LmDk-IQ", title: "Binny Montana", thumb: media("thumbs/ivx5LmDk-IQ.jpg") },
  { id: "6j_Odz-OfM4", title: "Free All The Guys Pt. 2 (ft. Jackboi, Stackupseason)", thumb: media("thumbs/6j_Odz-OfM4.jpg") },
  { id: "F2FV4sfO5E8", title: "PSA", thumb: media("thumbs/F2FV4sfO5E8.jpg") },
  { id: "1j3vqs5X1Ag", title: "Woah", thumb: media("thumbs/1j3vqs5X1Ag.jpg") },
  { id: "TeWe00jffHI", title: "Real Close", thumb: media("thumbs/TeWe00jffHI.jpg") },
  { id: "KwRGT5On2Rw", title: "One Block", thumb: media("thumbs/KwRGT5On2Rw.jpg") },
  { id: "FLu5cGbDiU0", title: "Too Fast (ft. JackBoi)", thumb: media("thumbs/FLu5cGbDiU0.jpg") },
  { id: "kIrfWg69p6M", title: "Heaven Sent (Jackboi x 23 Binladen)", thumb: media("thumbs/kIrfWg69p6M.jpg") },
  { id: "XXS4b-LIj40", title: "Fear God", thumb: media("thumbs/XXS4b-LIj40.jpg") },
  { id: "reFn_emVTPQ", title: "Where Were You", thumb: media("thumbs/reFn_emVTPQ.jpg") },
  { id: "cW_QAj1RLUI", title: "Deadman (x Jackboi x Stackupseason)", thumb: media("thumbs/cW_QAj1RLUI.jpg") },
  { id: "qkzzBcFJTCE", title: "Outside", thumb: media("thumbs/qkzzBcFJTCE.jpg") },
  { id: "qSGYR2PG334", title: "Barber — Maple Mic Performance (Toronto)", thumb: media("thumbs/qSGYR2PG334.jpg") },
];

export interface TopTrack {
  rank: number;
  title: string;
  artists: string;
  preview: string; // local 30s MP3 — always playable
  cover: string; // local album art
  year: number;
}

// Spotify's actual current Top 10 for 23 Binladen
export const TOP_TRACKS: TopTrack[] = [
  { rank: 1, title: "Brim", artists: "23 Binladen", preview: media("previews/brim.mp3"), cover: media("covers/brim-single.jpg"), year: 2025 },
  { rank: 2, title: "Plan", artists: "23 Binladen, ItzLilDrench, JackBoi", preview: media("previews/plan.mp3"), cover: media("covers/friedman-com.jpg"), year: 2026 },
  { rank: 3, title: "Too Fast", artists: "23 Binladen, JackBoi", preview: media("previews/too-fast.mp3"), cover: media("covers/too-fast-single.jpg"), year: 2023 },
  { rank: 4, title: "Caught Him", artists: "23 Binladen, JackBoi", preview: media("previews/caught-him.mp3"), cover: media("covers/caught-him-single.jpg"), year: 2026 },
  { rank: 5, title: "Fear God", artists: "23 Binladen", preview: media("previews/fear-god.mp3"), cover: media("covers/fear-god-single.jpg"), year: 2021 },
  { rank: 6, title: "FreeCar Music", artists: "23 Binladen", preview: media("previews/freecar-music.mp3"), cover: media("covers/in-only-pros-we-trust-ep.jpg"), year: 2024 },
  { rank: 7, title: "Gen 5", artists: "23 Binladen", preview: media("previews/gen-5.mp3"), cover: media("covers/friedman-com.jpg"), year: 2026 },
  { rank: 8, title: "Litty", artists: "23 Binladen", preview: media("previews/litty.mp3"), cover: media("covers/in-only-pros-we-trust-ep.jpg"), year: 2024 },
  { rank: 9, title: "Heaven Sent", artists: "JackBoi, 23 Binladen", preview: media("previews/heaven-sent.mp3"), cover: media("covers/heaven-sent-single.jpg"), year: 2023 },
  { rank: 10, title: "Outside", artists: "23 Binladen", preview: media("previews/outside.mp3"), cover: media("covers/outside-single.jpg"), year: 2021 },
];

export type ReleaseKind = "Album" | "EP" | "Single";

export interface Release {
  title: string;
  kind: ReleaseKind;
  date: string; // ISO date
  year: number;
  cover: string; // local artwork
  appleUrl: string;
  tracks?: number;
}

// Full discography (Apple Music / Spotify) — newest first
export const DISCOGRAPHY: Release[] = [
  { title: "Caught Him", kind: "Single", date: "2026-05-05", year: 2026, cover: media("covers/caught-him-single.jpg"), appleUrl: "https://music.apple.com/us/album/1893676493" },
  { title: "Friedman.com", kind: "Album", date: "2026-01-09", year: 2026, cover: media("covers/friedman-com.jpg"), appleUrl: "https://music.apple.com/us/album/1861508226", tracks: 11 },
  { title: "Barber (feat. 23 Binladen)", kind: "Single", date: "2026-01-09", year: 2026, cover: media("covers/barber-single.jpg"), appleUrl: "https://music.apple.com/us/album/1867883596" },
  { title: "Brim", kind: "Single", date: "2025-09-16", year: 2025, cover: media("covers/brim-single.jpg"), appleUrl: "https://music.apple.com/us/album/1839883811" },
  { title: "Damn", kind: "Single", date: "2025-06-11", year: 2025, cover: media("covers/damn-single.jpg"), appleUrl: "https://music.apple.com/us/album/1820188883" },
  { title: "Bail Out", kind: "Single", date: "2025-05-17", year: 2025, cover: media("covers/bail-out-single.jpg"), appleUrl: "https://music.apple.com/us/album/1813266963" },
  { title: "Binny Montana", kind: "Single", date: "2025-03-08", year: 2025, cover: media("covers/binny-montana-single.jpg"), appleUrl: "https://music.apple.com/us/album/1800699102" },
  { title: "In Only Pros We Trust", kind: "EP", date: "2024-12-23", year: 2024, cover: media("covers/in-only-pros-we-trust-ep.jpg"), appleUrl: "https://music.apple.com/us/album/1783794397", tracks: 6 },
  { title: "Real Close", kind: "Single", date: "2024-09-16", year: 2024, cover: media("covers/real-close-single.jpg"), appleUrl: "https://music.apple.com/us/album/1799339480" },
  { title: "One Block", kind: "Single", date: "2024-05-02", year: 2024, cover: media("covers/one-block-single.jpg"), appleUrl: "https://music.apple.com/us/album/1744508142" },
  { title: "Creeping", kind: "Single", date: "2024-03-13", year: 2024, cover: media("covers/creeping-single.jpg"), appleUrl: "https://music.apple.com/us/album/1735799003" },
  { title: "Too Fast (feat. JackBoi)", kind: "Single", date: "2023-10-19", year: 2023, cover: media("covers/too-fast-single.jpg"), appleUrl: "https://music.apple.com/us/album/1712874234" },
  { title: "Backdoor Play", kind: "Single", date: "2023-10-18", year: 2023, cover: media("covers/backdoor-play-single.jpg"), appleUrl: "https://music.apple.com/us/album/6782101504" },
  { title: "Geekin", kind: "Single", date: "2023-09-30", year: 2023, cover: media("covers/geekin-single.jpg"), appleUrl: "https://music.apple.com/us/album/1709798219" },
  { title: "Heaven Sent", kind: "Single", date: "2023-05-22", year: 2023, cover: media("covers/heaven-sent-single.jpg"), appleUrl: "https://music.apple.com/us/album/1870269416" },
  { title: "Free All The Guys (feat. Stackupseason & Jackboi)", kind: "Single", date: "2023-05-01", year: 2023, cover: media("covers/free-all-the-guys-single.jpg"), appleUrl: "https://music.apple.com/us/album/1682171922" },
  { title: "Where Were You", kind: "Single", date: "2022-12-25", year: 2022, cover: media("covers/where-were-you-single.jpg"), appleUrl: "https://music.apple.com/us/album/1661661530" },
  { title: "Fear God", kind: "Single", date: "2021-10-22", year: 2021, cover: media("covers/fear-god-single.jpg"), appleUrl: "https://music.apple.com/us/album/1590687617" },
  { title: "Outside", kind: "Single", date: "2021-06-05", year: 2021, cover: media("covers/outside-single.jpg"), appleUrl: "https://music.apple.com/us/album/1570903715" },
  { title: "Deadman (feat. Jackboi & Luh Splash)", kind: "Single", date: "2021-02-12", year: 2021, cover: media("covers/deadman-single.jpg"), appleUrl: "https://music.apple.com/us/album/1549274275" },
];

// Timeline = releases grouped by year (newest year first)
export const TIMELINE: { year: number; releases: Release[] }[] = [2026, 2025, 2024, 2023, 2022, 2021].map(
  (year) => ({ year, releases: DISCOGRAPHY.filter((r) => r.year === year) }),
);

// Background song for the hero — local audio file (Free All The Guys Pt. 2)
export const BG_SONG = {
  title: "Free All The Guys Pt. 2",
  src: media("previews/free-all-the-guys-pt-2.mp3"),
  videoId: "6j_Odz-OfM4",
};
