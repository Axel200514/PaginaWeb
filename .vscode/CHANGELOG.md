CHANGELOG

[2026-07-18] Performance & Security
- Self-hosted Outfit font to eliminate Google Fonts render-blocking.
- Replaced FontAwesome library with local SVG icons (YT, TT, IG).
- Applied CSS filters to SVGs to match original solid white aesthetic.
- Replaced FontAwesome spinner with pure CSS loader.
- Added Content-Security-Policy meta tag for XSS protection.
- Added rel="noopener noreferrer" to external links for tabnabbing prevention.
- Improved Open Graph metadata for rich sharing and WhatsApp compatibility.

[2026-07-18] UI/UX & QoL
- Added subtle UI click sounds.
- Replaced hover effects with continuous mobile animations.
- Slowed animations for visual accessibility.
- Updated title colors to improve visual hierarchy.
- Fixed abrupt text cutoff on long video titles.
- Updated SEO tags and H1 to "Lotus O.o".
- Translated UI text to English.
- Added Favicon using Logo.webp.
- Implemented Loading Spinner for video fetching.

[2026-07-16] Core Fixes
- Added localStorage caching for YouTube API responses.
- Increased maxResults to 50 for video fetching.
- Fixed skipping of Premieres and VODs.
- Optimized background image load times.
- Added cache buster to script.js.
