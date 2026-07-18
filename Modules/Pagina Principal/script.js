document.addEventListener('DOMContentLoaded', () => {
    // Subtle UI Click Sound using Web Audio API
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx;

    const playSubtlePop = () => {
        if (!audioCtx) audioCtx = new AudioContext();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05);

        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.01); // Volumen super bajo (20%)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.1);
    };

    // Attach to existing social buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', playSubtlePop);
    });

    const _0x1a2b = document.querySelector(['.ci', 'rcular', '-logo'].join(''));
    if (_0x1a2b) {
        let _0x3c4d = 0;
        _0x1a2b.addEventListener(['cl', 'ick'].join(''), () => {
            playSubtlePop(); // También suena al tocar el Easter Egg
            if (++_0x3c4d >= 3) {
                _0x3c4d = 0;
                window[String.fromCharCode(111, 112, 101, 110)](atob('aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ=='), '_blank');
            }
        });
    }

    const API_KEY = 'AIzaSyD54A5F4eYIlwzD5iYRP6xav1Isi76iaFw';
    const CHANNEL_ID = 'UCu1i6xLwgFuxKzZYS_GoMBA';
    // To get the uploads playlist, replace the second character of the Channel ID with 'U'
    const UPLOADS_PLAYLIST_ID = 'UUu1i6xLwgFuxKzZYS_GoMBA';
    const FIXED_VIDEO_ID = '9vmSMvZtGYY';
    const grid = document.getElementById('videos-grid');

    // Helper to parse ISO 8601 duration to seconds
    const getDurationSeconds = (duration) => {
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        if (!match) return 0;
        const h = parseInt(match[1]) || 0;
        const m = parseInt(match[2]) || 0;
        const s = parseInt(match[3]) || 0;
        return h * 3600 + m * 60 + s;
    };

    // Helper to create a video card HTML
    const createVideoCard = (title, thumbnail, videoId, index, isRecommended = false) => {
        const template = document.getElementById('video-card-template');
        const card = template.content.cloneNode(true).querySelector('a');

        card.href = `https://www.youtube.com/watch?v=${videoId}`;
        
        if (isRecommended) {
            card.classList.add('recommended');
        }

        const img = card.querySelector('.video-thumb');
        img.src = thumbnail;
        img.alt = title;

        const titleElement = card.querySelector('.video-title');
        titleElement.textContent = title;
        
        card.addEventListener('click', playSubtlePop);
        
        // Animate entrance
        setTimeout(() => {
            card.classList.add('loaded');
        }, 200 * (index + 1));

        return card;
    };

    const fetchRecommendedVideo = async () => {
        try {
            const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${FIXED_VIDEO_ID}&key=${API_KEY}`);
            if (!res.ok) throw new Error("Recommended video fetch failed");
            const data = await res.json();
            if (data.items && data.items.length > 0) {
                const fv = data.items[0];
                return {
                    title: fv.snippet.title,
                    thumbnail: fv.snippet.thumbnails.medium.url,
                    videoId: fv.id,
                    isRecommended: true
                };
            }
        } catch (error) {
            console.error("Error fetching recommended video:", error);
        }
        return null;
    };

    const fetchRecentVideos = async () => {
        try {
            // Use the Uploads playlist instead of search for reliability and speed (saves 99 quota points)
            // Fetch 50 items to ensure we find at least 3 long videos even if there are many shorts
            const playlistRes = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=50&key=${API_KEY}`);
            if (!playlistRes.ok) throw new Error("Recent videos fetch failed");
            const playlistData = await playlistRes.json();

            if (playlistData.items && playlistData.items.length > 0) {
                // Keep chronological order from playlist
                const videoIds = playlistData.items
                    .map(item => item.snippet.resourceId.videoId)
                    .filter(id => id !== FIXED_VIDEO_ID);
                
                if (videoIds.length > 0) {
                    const detailsRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,liveStreamingDetails&id=${videoIds.join(',')}&key=${API_KEY}`);
                    if (!detailsRes.ok) throw new Error("Recent videos details fetch failed");
                    const detailsData = await detailsRes.json();
                    
                    if (detailsData.items) {
                        const recentVideos = [];
                        // Iterate based on the playlist order to preserve chronology
                        for (let id of videoIds) {
                            const video = detailsData.items.find(v => v.id === id);
                            if (!video) continue;
                            
                            const durationSecs = getDurationSeconds(video.contentDetails.duration);
                            
                            // Include if it's longer than 60s (filters out shorts and upcoming streams which are PT0S)
                            if (durationSecs > 61 && recentVideos.length < 3) {
                                recentVideos.push({
                                    title: video.snippet.title,
                                    thumbnail: video.snippet.thumbnails.medium.url,
                                    videoId: video.id,
                                    isRecommended: false
                                });
                            }
                        }
                        return recentVideos;
                    }
                }
            }
        } catch (error) {
            console.error("Error fetching recent videos:", error);
        }
        return [];
    };

    const CACHE_KEY = 'yt_videos_cache';
    const CACHE_DURATION = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

    const renderVideos = (displayVideos) => {
        grid.innerHTML = '';
        if (displayVideos && displayVideos.length > 0) {
            displayVideos.forEach((vid, idx) => {
                grid.appendChild(createVideoCard(vid.title, vid.thumbnail, vid.videoId, idx, vid.isRecommended));
            });
        } else {
            grid.innerHTML = '<p style="text-align:center; color: var(--text-secondary); width: 100%;">Could not load videos. Please check the API key or connection.</p>';
        }
    };

    const loadVideos = async () => {
        // Try to load from cache first
        try {
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                const parsedCache = JSON.parse(cached);
                if (Date.now() - parsedCache.timestamp < CACHE_DURATION) {
                    renderVideos(parsedCache.videos);
                    return; // Stop here, we used the cache
                }
            }
        } catch (e) {
            console.warn("Cache read failed", e);
        }

        // Fetch both at the same time, independently
        const [recommendedVideo, recentVideos] = await Promise.all([
            fetchRecommendedVideo(),
            fetchRecentVideos()
        ]);

        let displayVideos = [];
        
        if (recommendedVideo) {
            displayVideos.push(recommendedVideo);
        }
        
        if (recentVideos && recentVideos.length > 0) {
            displayVideos = displayVideos.concat(recentVideos);
        }
        
        // Save to cache
        if (displayVideos.length > 0) {
            try {
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    timestamp: Date.now(),
                    videos: displayVideos
                }));
            } catch (e) {
                console.warn("Cache write failed", e);
            }
        }

        renderVideos(displayVideos);
    };

    loadVideos();
});
