document.addEventListener('DOMContentLoaded', async () => {
    const API_KEY = 'AIzaSyD54A5F4eYIlwzD5iYRP6xav1Isi76iaFw';
    const CHANNEL_ID = 'UCu1i6xLwgFuxKzZYS_GoMBA';
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
        

        // Animate entrance
        setTimeout(() => {
            card.classList.add('loaded');
        }, 200 * (index + 1));

        return card;
    };

    try {
        
        const fixedVideoRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${FIXED_VIDEO_ID}&key=${API_KEY}`);
        const fixedVideoData = await fixedVideoRes.json();
        
        
        const recentSearchRes = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=30&type=video`);
        const recentSearchData = await recentSearchRes.json();

        let displayVideos = [];

        // 1. Add the Fixed Video first, marked as Recommended
        if (fixedVideoData.items && fixedVideoData.items.length > 0) {
            const fv = fixedVideoData.items[0];
            displayVideos.push({
                title: fv.snippet.title,
                thumbnail: fv.snippet.thumbnails.medium.url,
                videoId: fv.id,
                isRecommended: true
            });
        }

        
        if (recentSearchData.items && recentSearchData.items.length > 0) {
            const videoIds = recentSearchData.items.map(item => item.id.videoId).filter(id => id !== FIXED_VIDEO_ID);
            
            if (videoIds.length > 0) {
                const videoDetailsRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,liveStreamingDetails&id=${videoIds.join(',')}&key=${API_KEY}`);
                const videoDetailsData = await videoDetailsRes.json();

                if (videoDetailsData.items) {
                    for (let video of videoDetailsData.items) {
                        const durationSecs = getDurationSeconds(video.contentDetails.duration);
                        const isLiveStream = video.hasOwnProperty('liveStreamingDetails');
                        
                        
                        if (durationSecs > 61 && !isLiveStream && displayVideos.length < 4) {
                            displayVideos.push({
                                title: video.snippet.title,
                                thumbnail: video.snippet.thumbnails.medium.url,
                                videoId: video.id,
                                isRecommended: false
                            });
                        }
                    }
                }
            }
        }

        
        grid.innerHTML = '';
        displayVideos.forEach((vid, idx) => {
            grid.appendChild(createVideoCard(vid.title, vid.thumbnail, vid.videoId, idx, vid.isRecommended));
        });

    } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        grid.innerHTML = '<p style="text-align:center; color: var(--text-secondary); width: 100%;">No se pudieron cargar los videos. Verifica la clave de la API o la conexión.</p>';
    }
});
