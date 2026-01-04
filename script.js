// Lyrics data with timestamps (in seconds)
const lyricsData = [
    { time: 0, text: "歡迎來到音樂播放器" },
    { time: 3, text: "這是一首示範歌曲" },
    { time: 6, text: "字幕會隨著音樂播放" },
    { time: 9, text: "當音樂進行到這裡" },
    { time: 12, text: "字幕就會同步顯示" },
    { time: 15, text: "你可以點擊任何一句歌詞" },
    { time: 18, text: "音樂會自動跳轉到那個位置" },
    { time: 21, text: "這樣就能快速導航" },
    { time: 24, text: "找到你喜歡的部分" },
    { time: 27, text: "享受音樂的美好時光" },
    { time: 30, text: "每一句都有精確的時間點" },
    { time: 33, text: "讓歌詞完美同步" },
    { time: 36, text: "就像在 KTV 唱歌一樣" },
    { time: 39, text: "這就是即時字幕功能" },
    { time: 42, text: "感謝您的使用" }
];

// Get DOM elements
const audioPlayer = document.getElementById('audio-player');
const lyricsContainer = document.getElementById('lyrics-container');

// Initialize lyrics display
function initLyrics() {
    lyricsContainer.innerHTML = '';
    
    lyricsData.forEach((lyric, index) => {
        const lyricLine = document.createElement('div');
        lyricLine.className = 'lyrics-line';
        lyricLine.textContent = lyric.text;
        lyricLine.dataset.time = lyric.time;
        lyricLine.dataset.index = index;
        
        // Add click event to seek to this lyric
        lyricLine.addEventListener('click', function() {
            audioPlayer.currentTime = parseFloat(this.dataset.time);
            if (audioPlayer.paused) {
                audioPlayer.play();
            }
        });
        
        lyricsContainer.appendChild(lyricLine);
    });
}

// Update active lyric based on current time
function updateLyrics() {
    const currentTime = audioPlayer.currentTime;
    const lyricLines = document.querySelectorAll('.lyrics-line');
    
    let activeIndex = -1;
    
    // Find the current active lyric
    for (let i = lyricsData.length - 1; i >= 0; i--) {
        if (currentTime >= lyricsData[i].time) {
            activeIndex = i;
            break;
        }
    }
    
    // Update all lyric lines
    lyricLines.forEach((line, index) => {
        line.classList.remove('active', 'passed');
        
        if (index === activeIndex) {
            line.classList.add('active');
            // Auto-scroll to active lyric
            line.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else if (index < activeIndex) {
            line.classList.add('passed');
        }
    });
}

// Event listeners
audioPlayer.addEventListener('timeupdate', updateLyrics);

audioPlayer.addEventListener('loadedmetadata', function() {
    console.log('Audio loaded, duration:', audioPlayer.duration);
});

audioPlayer.addEventListener('error', function(e) {
    console.error('Audio error:', e);
    // If audio file doesn't exist, still show the interface
    console.log('Note: Audio file not found. The interface is ready but you need to add an audio file named "sample-audio.mp3"');
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initLyrics();
    console.log('Lyrics player initialized');
    console.log('Total lyrics lines:', lyricsData.length);
});

// Handle play/pause
audioPlayer.addEventListener('play', function() {
    console.log('Audio playing');
});

audioPlayer.addEventListener('pause', function() {
    console.log('Audio paused');
});

// Reset to first lyric when audio ends
audioPlayer.addEventListener('ended', function() {
    const lyricLines = document.querySelectorAll('.lyrics-line');
    lyricLines.forEach(line => {
        line.classList.remove('active', 'passed');
    });
});
