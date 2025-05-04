const songs = [
    {
        title: "BANG BANG",
        artist: "Kaif _Vishal Shekhar, Benny",
        cover: "https://i.pinimg.com/originals/66/ce/6b/66ce6b8f88f1f151d2cb335997352def.jpg",
        audio: "music/WhatsApp Audio 2025-05-03 at 15.54.19_8f786ac1.mp3",
        mood: "energetic",
        color: "#ff4d4d",
        duration: "3:45"
    },
    {
        title: "Bom Diggy Diggy",
        artist: "Zack Knight and Jasmin Walia",
        cover: "https://i.ytimg.com/vi/ri192qL3vH8/maxresdefault.jpg",
        audio: "music/Bom Diggy Diggy  (VIDEO) _ Zack Knight _ Jasmin Walia _ Sonu Ke Titu Ki Sweety-yt.savetube.me.mp3",
        mood: "happy",
        color: "#ffcc00",
        duration: "2:54"
    },
    {
        title: "HAYEE OYE",
        artist: "Karan Randhawa ft. Bohemia",
        cover: "https://i.ytimg.com/vi/TGBEv_24y8g/maxresdefault.jpg",
        audio: "music/Haaye Oye - QARAN ft. Ash King _ Elli AvrRam _ Shantanu Maheshwari _ Vishal Handa-yt.savetube.me.mp3",
        mood: "calm",
        color: "#4d79ff",
        duration: "4:12"
    },
    {
        title: "Chammak Challo",
        artist: "Akon and Hamsika Iyer",
        cover: "https://i.ytimg.com/vi/oAVhUAaVCVQ/maxresdefault.jpg",
        audio: "music/Lyrical_ Chammak Challo _ Ra One _ ShahRukh Khan _ Kareena Kapoor-yt.savetube.me.mp3",
        mood: "energetic",
        color: "#ff4d4d",
        duration: "3:20"
    },
    {
        title: "Suit",
        artist: "Guru Randhawa & Arjun",
        cover: "https://i.ytimg.com/vi/zhyE3TEaieA/maxresdefault.jpg",
        audio: "music/Suit Suit Video Song _ Hindi Medium _ Irrfan Khan & Saba Qamar _ Guru Randhawa _ Arjun-yt.savetube.me.mp3",
        mood: "sad",
        color: "#9933ff",
        duration: "3:15"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        cover: "https://i.ytimg.com/vi/eve7x59aXJg/maxresdefault.jpg",
        audio: "music/Ed Sheeran - Shape of You (Official Music Video)-yt.savetube.me.mp3",
        mood: "happy",
        color: "#1db954",
        duration: "3:53"
    },
    {
        title: "Believer",
        artist: "Imagine Dragons",
        cover: "https://wallpapercave.com/wp/wp9396936.jpg",
        audio: "music/Imagine Dragons - Believer (Official Music Video)-yt.savetube.me.mp3",
        mood: "energetic",
        color: "#ff9f43",
        duration: "3:24"
    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        cover: "https://i.ytimg.com/vi/xVYL-wLKR9g/maxresdefault.jpg",
        audio: "music/Ed Sheeran - Perfect (Official Music Video)-yt.savetube.me.mp3",
        mood: "calm",
        color: "#54a0ff",
        duration: "4:23"
    },
    {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        cover: "https://twostorymelody.com/wp-content/uploads/2018/09/uptownfunk-1170x658.jpeg",
        audio: "music/Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars-yt.savetube.me.mp3",
        mood: "happy",
        color: "#ff6b6b",
        duration: "4:30"
    },
    {
        title: "Senorita",
        artist: "Shawn Mendes, Camila Cabello",
        cover: "https://i.ytimg.com/vi/Pkh8UtuejGw/maxresdefault.jpg",
        audio: "music/Shawn Mendes, Camila Cabello - Señorita-yt.savetube.me.mp3",
        mood: "romantic",
        color: "#ff9ff3",
        duration: "3:10"
    },
    {
        title: "Dance Monkey",
        artist: "Tones and I",
        cover: "https://i.ytimg.com/vi/q0hyYWKXF0Q/maxresdefault.jpg",
        audio: "music/TONES AND I - DANCE MONKEY (OFFICIAL VIDEO)-yt.savetube.me.mp3",
        mood: "energetic",
        color: "#feca57",
        duration: "3:29"
    },
    {
        title: "Memories",
        artist: "Maroon 5",
        cover: "https://i.ytimg.com/vi/SlPhMPnQ58k/maxresdefault.jpg",
        audio: "music/Maroon 5 - Memories (Official Video)-yt.savetube.me.mp3",
        mood: "neutral",
        color: "#1dd1a1",
        duration: "3:09"
    },
    {
        title: "Tareefan",
        artist: "Jubin Nautiyal,Rochak Kohli",
        cover: "https://i.ytimg.com/vi/aYmpyr0yERU/maxresdefault.jpg",
        audio: "music/Tareefan _ Veere Di Wedding _ QARAN  Ft. Badshah _ Kareena Kapoor Khan, Sonam Kapoor, Swara & Shikha-yt.savetube.me.mp3",
        mood: "energetic",
        color: "#ff7675",
        duration: "3:20"
    },
    {
        title: "Ghungru-tut-gaye",
        artist: "Pankaj Udhas",
        cover: "https://i.ytimg.com/vi/CIJAWGmKJd0/maxresdefault.jpg",
        audio: "music/Ghungroo Song _ WAR _ Hrithik Roshan, Vaani Kapoor _ Arijit Singh, Shilpa _ Vishal & Shekhar, Kumaar-yt.savetube.me.mp3",
        mood: "happy",
        color: "#74b9ff",
        duration: "3:03"
    },
    {
        title: "High-heel-te-nache",
        artist: "Meet Bros",
        cover: "https://i.ytimg.com/vi/CCcXAoZgHkw/maxresdefault.jpg",
        audio: "music/HIGH HEELS TE NACHCHE Video Song _ KI & KA _ Meet Bros ft. Jaz Dhami _ Yo Yo Honey Singh _ T-Series-yt.savetube.me.mp3",
        mood: "happy",
        color: "#55efc4",
        duration: "2:54"
    },
    {
        title: "Me tera boyfriend",
        artist: "Arijit Singh, Neha Kakkar",
        cover: "https://i.pinimg.com/736x/f2/5f/cd/f25fcde2779afc79b4a3e5c9ced6637f.jpg",
        audio: "music/Main Tera Boyfriend Lyrical Video _ Raabta _ Arijit Singh _ Neha Kakkar _ Sushant Singh Kriti Sanon-yt.savetube.me.mp3",
        mood: "calm",
        color: "#a29bfe",
        duration: "3:35"
    }
];

const playlists = [
    {
        name: "My Favorites",
        description: "Your favorite tracks",
        cover: "ChatGPT Image May 4, 2025, 05_31_02 PM.png",
        songs: [0, 1, 2, 5, 6, 12, 13]
    },
    {
        name: "Workout Mix",
        description: "High energy tracks for your workout",
        cover: "ChatGPT Image May 4, 2025, 05_34_37 PM.png",
        songs: [0, 3, 6, 10, 12]
    },
    {
        name: "Chill Vibes",
        description: "Relaxing music for your downtime",
        cover: "ChatGPT Image May 4, 2025, 05_47_31 PM.png",
        songs: [2, 4, 7, 11, 15]
    },
    {
        name: "Party Hits",
        description: "The hottest tracks for your party",
        cover: "ChatGPT Image May 4, 2025, 05_38_59 PM.png",
        songs: [1, 3, 8, 9, 13, 14]
    },
    {
        name: "Top Mix",
        description: "Your top tracks mixed together",
        cover: "ChatGPT Image May 4, 2025, 05_43_11 PM.png",
        songs: [5, 6, 7, 8, 9, 10, 11]
    }
];

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const albumArt = document.getElementById('album-art');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const volumeSlider = document.getElementById('volume');
const visualizerContainer = document.getElementById('visualizer-container');
const visualizerProgress = document.getElementById('visualizer-progress');
const playlistGrid = document.getElementById('playlist-grid');
const songGrid = document.getElementById('song-grid');
const playlistContainer = document.getElementById('playlist-container');
const createPlaylistBtn = document.getElementById('create-playlist');
const playlistModal = document.getElementById('playlist-modal');
const closeModal = document.querySelector('.close');
const savePlaylistBtn = document.getElementById('save-playlist');
const playlistNameInput = document.getElementById('playlist-name');
const deviceBtn = document.getElementById('device-btn');
const deviceModal = document.getElementById('device-modal');
const queueBtn = document.getElementById('queue-btn');
const queueModal = document.getElementById('queue-modal');
const queueTabs = document.querySelectorAll('.queue-tab');
const queueSections = document.querySelectorAll('.queue-section');
const nowPlayingBtn = document.getElementById('now-playing-btn');
const nowPlayingView = document.getElementById('now-playing-view');
const nowPlayingClose = document.querySelector('.now-playing-close');
const nowPlayingAlbumArt = document.getElementById('now-playing-album-art');
const nowPlayingTitle = document.getElementById('now-playing-title');
const nowPlayingArtist = document.getElementById('now-playing-artist');
const nowPlayingProgress = document.getElementById('now-playing-progress');
const nowPlayingCurrentTime = document.getElementById('now-playing-current-time');
const nowPlayingDuration = document.getElementById('now-playing-duration');
const nowPlayingPlayBtn = document.getElementById('now-playing-play');
const particlesContainer = document.getElementById('particles');
const spectrumOverlay = document.getElementById('spectrum-overlay');
const searchPanel = document.getElementById('search-panel');
const libraryView = document.getElementById('library-view');
const gradientBackdrop = document.getElementById('gradient-backdrop');
const createLibraryPlaylistBtn = document.getElementById('create-library-playlist');
const navItems = document.querySelectorAll('nav li');
const greetingEl = document.getElementById('greeting');
const greetingSubtext = document.getElementById('greeting-subtext');
const playlistView = document.getElementById('playlist-view');
const playlistCover = document.getElementById('playlist-cover');
const playlistNameDisplay = document.getElementById('playlist-name-display');
const playlistDescription = document.getElementById('playlist-description');
const playlistPlayBtn = document.getElementById('playlist-play-btn');
const playlistSongList = document.getElementById('playlist-song-list');
const playlistItems = document.querySelectorAll('#playlist-container li');
const mainContentView = document.getElementById('main-content-view');
const backBtn = document.getElementById('back-btn');
const forwardBtn = document.getElementById('forward-btn');

let audioContext;
let analyser;
let dataArray;
let source;
let isPlaying = false;
let currentSongIndex = 0;
let lastBeatTime = 0;
let beatInterval = 0;
let droplets = [];
let audioInitialized = false;
let animationFrameId;
let spectrumAnimationId;
let currentPlaylist = 'favorites';
let likedSongs = [0, 1, 5, 6, 12];
let viewHistory = ['main'];
let viewHistoryIndex = 0;

function init() {
    updateGreeting();
    
    renderPlaylists();
    renderSongs();
    renderPlaylistCards();
    loadSong(songs[currentSongIndex]);
    
    document.addEventListener('click', initAudioOnFirstInteraction, { once: true });
    
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextSong);
    audio.addEventListener('play', () => {
        isPlaying = true;
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        nowPlayingPlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
        document.querySelector('.vinyl-record').classList.add('playing');
        updateTheme();
        startSpectrumAnimation();
    });
    audio.addEventListener('pause', () => {
        isPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        nowPlayingPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
        document.querySelector('.vinyl-record').classList.remove('playing');
        stopSpectrumAnimation();
    });
    audio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        alert('Error loading audio file. Please try another song.');
    });
    audio.addEventListener('canplay', () => {
        console.log('Audio ready to play');
    });
    progressContainer.addEventListener('click', setProgress);
    volumeSlider.addEventListener('input', setVolume);
    createPlaylistBtn.addEventListener('click', openPlaylistModal);
    closeModal.addEventListener('click', closePlaylistModal);
    savePlaylistBtn.addEventListener('click', savePlaylist);
    deviceBtn.addEventListener('click', () => deviceModal.style.display = 'flex');
    document.querySelector('.device-modal .close').addEventListener('click', () => deviceModal.style.display = 'none');
    queueBtn.addEventListener('click', toggleQueueModal);
    document.querySelector('.queue-close').addEventListener('click', toggleQueueModal);
    nowPlayingBtn.addEventListener('click', toggleNowPlayingView);
    nowPlayingClose.addEventListener('click', toggleNowPlayingView);
    nowPlayingPlayBtn.addEventListener('click', togglePlay);
    createLibraryPlaylistBtn.addEventListener('click', openPlaylistModal);
    playlistPlayBtn.addEventListener('click', playPlaylist);
    backBtn.addEventListener('click', navigateBack);
    forwardBtn.addEventListener('click', navigateForward);
    
    queueTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            queueTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            queueSections.forEach(section => section.classList.remove('active'));
            document.getElementById(`${tab.dataset.tab}-section`).classList.add('active');
        });
    });

    
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            if (index === 1) {
                showSearchPanel();
                addToHistory('search');
            } else if (index === 2) { 
                showLibraryView();
                addToHistory('library');
            } else { 
                showMainContent();
                addToHistory('main');
            }
        });
    });

   
    playlistItems.forEach(item => {
        item.addEventListener('click', () => {
            playlistItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            currentPlaylist = item.dataset.playlist;
            
            if (currentPlaylist === 'all') {
                renderSongs();
                showMainContent();
                addToHistory('main');
            } else if (currentPlaylist === 'favorites') {
                renderLikedSongs();
                showMainContent();
                addToHistory('main');
            } else {
                viewPlaylist(currentPlaylist);
                addToHistory('playlist');
            }
        });
    });

    
    addHoverPlayButtons();
    
  
    updateNavButtons();
    
   
    setInterval(updateGreeting, 60000);
}

function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    let subtext;
    
    if (hour < 5) {
        greeting = "Good night";
        subtext = "Music for your late night vibes";
    } else if (hour < 12) {
        greeting = "Good morning";
        subtext = "Start your day with great music";
    } else if (hour < 14) {
        greeting = "Good noon";
        subtext = "Perfect time for a musical break";
    } else if (hour < 18) {
        greeting = "Good afternoon";
        subtext = "Keep the music playing all day long";
    } else {
        greeting = "Good evening";
        subtext = "Unwind with your favorite tunes";
    }
    
    greetingEl.textContent = greeting;
    greetingSubtext.textContent = subtext;
}

function navigateBack() {
    if (viewHistoryIndex > 0) {
        viewHistoryIndex--;
        const view = viewHistory[viewHistoryIndex];
        navigateToView(view);
        updateNavButtons();
    }
}

function navigateForward() {
    if (viewHistoryIndex < viewHistory.length - 1) {
        viewHistoryIndex++;
        const view = viewHistory[viewHistoryIndex];
        navigateToView(view);
        updateNavButtons();
    }
}

function navigateToView(view) {
    hideAllViews();
    
    switch(view) {
        case 'main':
            showMainContent();
            break;
        case 'library':
            showLibraryView();
            break;
        case 'search':
            showSearchPanel();
            break;
        case 'playlist':
            playlistView.classList.add('active');
            break;
    }
}

function addToHistory(view) {
    
    if (viewHistory[viewHistoryIndex] === view) return;
    
   
    if (viewHistoryIndex < viewHistory.length - 1) {
        viewHistory = viewHistory.slice(0, viewHistoryIndex + 1);
    }
    
    viewHistory.push(view);
    viewHistoryIndex++;
    updateNavButtons();
}

function updateNavButtons() {
    backBtn.disabled = viewHistoryIndex <= 0;
    forwardBtn.disabled = viewHistoryIndex >= viewHistory.length - 1;
}

function hideAllViews() {
    mainContentView.style.display = 'none';
    libraryView.classList.remove('active');
    searchPanel.classList.remove('active');
    playlistView.classList.remove('active');
}

function showMainContent() {
    hideAllViews();
    mainContentView.style.display = 'block';
    
    navItems.forEach((item, index) => {
        if (index === 0) item.classList.add('active');
        else item.classList.remove('active');
    });
}

function showLibraryView() {
    hideAllViews();
    libraryView.classList.add('active');
  
    navItems.forEach((item, index) => {
        if (index === 2) item.classList.add('active');
        else item.classList.remove('active');
    });
}

function showSearchPanel() {
    hideAllViews();
    searchPanel.classList.add('active');
    
    navItems.forEach((item, index) => {
        if (index === 1) item.classList.add('active');
        else item.classList.remove('active');
    });
}

function initAudioOnFirstInteraction() {
    if (!audioInitialized) {
        setupVisualizer();
        createVisualizerBars();
        createProgressVisualizer();
        animateParticles();
        audioInitialized = true;
        
      
        if (isPlaying) {
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Playback prevented after user interaction");
                    playBtn.innerHTML = '<i class="fas fa-play"></i>';
                    isPlaying = false;
                });
            }
        }
    }
}

function createVisualizerBars() {
    visualizerContainer.innerHTML = '';
    const barCount = Math.min(Math.floor(window.innerWidth / 10), 120);
    
    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement('div');
        bar.className = 'visualizer-bar';
        visualizerContainer.appendChild(bar);
    }
}

function createProgressVisualizer() {
    visualizerProgress.innerHTML = '';
    const barCount = Math.min(Math.floor(window.innerWidth / 20), 60);
    
    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement('div');
        bar.className = 'visualizer-progress-bar';
        visualizerProgress.appendChild(bar);
    }
}

function createDroplet(x, y, color, size, velocity) {
    const droplet = document.createElement('div');
    droplet.className = 'droplet';
    droplet.style.width = `${size}px`;
    droplet.style.height = `${size}px`;
    droplet.style.left = `${x}px`;
    droplet.style.top = `${y}px`;
    droplet.style.setProperty('--droplet-color', color);
    droplet.style.animationDuration = `${2 + Math.random() * 3}s`;
    
    const angle = Math.random() * Math.PI * 2;
    const speed = 1 + Math.random() * 3;
    droplet.vx = Math.cos(angle) * speed;
    droplet.vy = Math.sin(angle) * speed;
    
    particlesContainer.appendChild(droplet);
    
    droplets.push({
        element: droplet,
        x: x,
        y: y,
        vx: droplet.vx,
        vy: droplet.vy,
        size: size,
        life: 0,
        maxLife: 2 + Math.random() * 3
    });
    
    setTimeout(() => {
        droplet.remove();
        droplets = droplets.filter(d => d.element !== droplet);
    }, 5000);
}

function animateParticles() {
    droplets.forEach(droplet => {
        droplet.life += 0.016;
        if (droplet.life >= droplet.maxLife) {
            droplet.element.style.opacity = 0;
            return;
        }
        
        droplet.x += droplet.vx;
        droplet.y += droplet.vy;
        droplet.vy += 0.05;
        
        droplet.element.style.transform = `translate(${droplet.x}px, ${droplet.y}px)`;
        
        const lifeRatio = droplet.life / droplet.maxLife;
        droplet.element.style.opacity = 1 - lifeRatio;
    });
    
    requestAnimationFrame(animateParticles);
}

function loadSong(song) {
   
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    if (spectrumAnimationId) {
        cancelAnimationFrame(spectrumAnimationId);
    }
    
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    albumArt.src = song.cover;
    nowPlayingAlbumArt.src = song.cover;
    nowPlayingTitle.textContent = song.title;
    nowPlayingArtist.textContent = song.artist;
    
    
    audio.pause();
    audio.src = song.audio;
    audio.load();
    
    document.documentElement.style.setProperty('--theme-color', song.color);
    document.querySelector('.main-content').style.background = 
        `linear-gradient(to bottom, ${song.color} 0%, var(--dark-bg) 300px`;
    nowPlayingView.style.background = `linear-gradient(to bottom, ${song.color} 0%, var(--dark-bg) 100%)`;
    
   
    droplets.forEach(d => d.element.remove());
    droplets = [];
    
    if (audioInitialized) {
        setupVisualizer();
    }
    
    if (isPlaying) {
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Playback prevented:", error);
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                isPlaying = false;
            });
        }
    }
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
    } else {
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Playback prevented:", error);
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                isPlaying = false;
                
                const message = document.createElement('div');
                message.className = 'playback-message';
                message.innerHTML = 'Click anywhere to enable audio playback';
                document.body.appendChild(message);
                setTimeout(() => message.remove(), 3000);
            });
        }
    }
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex > songs.length - 1) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
}

function updateProgress() {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    nowPlayingProgress.style.width = `${progressPercent}%`;
    
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
    }
    
    if (durationSeconds) {
        durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        nowPlayingDuration.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    nowPlayingCurrentTime.textContent = `${currentMinutes}:${currentSeconds}`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function setVolume() {
    audio.volume = this.value;
}

function setupVisualizer() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        
        source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        
        dataArray = new Uint8Array(analyser.frequencyBinCount);
    }
    visualize();
}

function visualize() {
    if (!audioContext || audioContext.state === 'suspended') {
        animationFrameId = requestAnimationFrame(visualize);
        return;
    }
    
    analyser.getByteFrequencyData(dataArray);
    
    const visualizerBars = document.querySelectorAll('.visualizer-bar');
    const progressBars = document.querySelectorAll('.visualizer-progress-bar');
    const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-color');
    
    for (let i = 0; i < visualizerBars.length; i++) {
        const index = Math.floor(i * (dataArray.length / visualizerBars.length));
        const value = dataArray[index] / 255;
        const height = value * 100;
        
        const intensity = Math.min(value * 2, 1);
        visualizerBars[i].style.height = `${height}%`;
        
        const hue = (i / visualizerBars.length) * 360;
        visualizerBars[i].style.background = `
            linear-gradient(
                to top,
                hsla(${hue}, 100%, 50%, ${intensity}),
                hsla(${(hue + 60) % 360}, 100%, 50%, ${intensity * 0.7})
            )`;
        visualizerBars[i].style.opacity = 0.5 + (value * 0.5);
        visualizerBars[i].style.transform = `translateX(${Math.sin(Date.now() * 0.002 + i * 0.2) * 2}px)`;
    }
    
    for (let i = 0; i < progressBars.length; i++) {
        const index = Math.floor(i * (dataArray.length / progressBars.length));
        const value = dataArray[index] / 255;
        const height = value * 100;
        
        progressBars[i].style.height = `${height}%`;
        progressBars[i].style.opacity = 0.3 + (value * 0.7);
        progressBars[i].style.background = `
            linear-gradient(
                to top,
                ${currentColor},
                rgba(255, 255, 255, ${value * 0.7})
            )`;
    }
    
    detectBeat();
    animationFrameId = requestAnimationFrame(visualize);
}

function startSpectrumAnimation() {
    spectrumOverlay.classList.add('spectrum-active');
    
    let pos = 0;
    function animateSpectrum() {
        pos = (pos + 0.1) % 100;
        spectrumOverlay.style.backgroundPosition = `${pos}% ${pos}%`;
        spectrumAnimationId = requestAnimationFrame(animateSpectrum);
    }
    
    animateSpectrum();
}

function stopSpectrumAnimation() {
    spectrumOverlay.classList.remove('spectrum-active');
    if (spectrumAnimationId) {
        cancelAnimationFrame(spectrumAnimationId);
    }
}

function detectBeat() {
    const sum = dataArray.reduce((a, b) => a + b, 0);
    const average = sum / dataArray.length;
    const max = Math.max(...dataArray);
    const now = Date.now();
    
    if (average > 150 && max > 200 && isPlaying) {
        if (lastBeatTime > 0) {
            beatInterval = now - lastBeatTime;
        }
        lastBeatTime = now;
        
        if (beatInterval > 0 && beatInterval < 1000) {
            createDropletsOnBeat(average, max);
        }
        
        albumArt.classList.add('pulse');
        nowPlayingAlbumArt.classList.add('pulse');
        setTimeout(() => {
            albumArt.classList.remove('pulse');
            nowPlayingAlbumArt.classList.remove('pulse');
        }, 300);
        
        visualizerContainer.style.transform = 'scaleY(1.1)';
        visualizerContainer.style.transition = 'transform 0.1s ease-out';
        setTimeout(() => {
            visualizerContainer.style.transform = 'scaleY(1)';
        }, 100);
    }
}

function createDropletsOnBeat(average, max) {
    const intensity = max / 255;
    const dropletCount = Math.floor(5 + intensity * 15);
    const colors = [
        `hsla(${Math.random() * 360}, 100%, 50%, 0.7)`,
        `hsla(${Math.random() * 360}, 100%, 50%, 0.7)`,
        `hsla(${Math.random() * 360}, 100%, 50%, 0.7)`
    ];
    
    for (let i = 0; i < dropletCount; i++) {
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight + 50;
        const size = 5 + Math.random() * 15 * intensity;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        createDroplet(x, y, color, size);
    }
}

function updateTheme() {
    const currentSong = songs[currentSongIndex];
    document.documentElement.style.setProperty('--theme-color', currentSong.color);
    document.querySelector('.main-content').style.background = 
        `linear-gradient(to bottom, ${currentSong.color} 0%, var(--dark-bg) 300px)`;
    nowPlayingView.style.background = `linear-gradient(to bottom, ${currentSong.color} 0%, var(--dark-bg) 100%)`;
}

function renderPlaylists() {
    playlistContainer.innerHTML = '';
    
    const allSongsLi = document.createElement('li');
    allSongsLi.textContent = 'All Songs';
    allSongsLi.dataset.playlist = 'all';
    allSongsLi.addEventListener('click', () => {
        currentPlaylist = 'all';
        renderSongs();
        document.querySelectorAll('#playlist-container li').forEach(li => li.classList.remove('active'));
        allSongsLi.classList.add('active');
        showMainContent();
        addToHistory('main');
    });
    playlistContainer.appendChild(allSongsLi);
    
    const favoritesLi = document.createElement('li');
    favoritesLi.textContent = 'My Favorites';
    favoritesLi.dataset.playlist = 'favorites';
    favoritesLi.classList.add('active');
    favoritesLi.addEventListener('click', () => {
        currentPlaylist = 'favorites';
        renderLikedSongs();
        document.querySelectorAll('#playlist-container li').forEach(li => li.classList.remove('active'));
        favoritesLi.classList.add('active');
        showMainContent();
        addToHistory('main');
    });
    playlistContainer.appendChild(favoritesLi);
    
  
    playlists.forEach((playlist, index) => {
        const li = document.createElement('li');
        li.textContent = playlist.name;
        li.dataset.playlist = index;
        li.addEventListener('click', () => {
            viewPlaylist(index);
            addToHistory('playlist');
        });
        playlistContainer.appendChild(li);
    });
}

function renderPlaylistCards() {
    playlistGrid.innerHTML = '';
    playlists.forEach((playlist, index) => {
        const card = document.createElement('div');
        card.className = 'playlist-card';
        
        const playlistSongs = playlist.songs.slice(0, 4);
        
        if (playlistSongs.length > 0) {
            const collage = document.createElement('div');
            collage.className = 'playlist-collage';
            collage.style.display = 'grid';
            collage.style.gridTemplateColumns = '1fr 1fr';
            collage.style.gridTemplateRows = '1fr 1fr';
            collage.style.width = '100%';
            collage.style.height = '180px';
            collage.style.gap = '2px';
            
            playlistSongs.forEach(songIndex => {
                const img = document.createElement('img');
                img.src = songs[songIndex].cover;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                collage.appendChild(img);
            });
            
            for (let i = playlistSongs.length; i < 4; i++) {
                const empty = document.createElement('div');
                empty.style.backgroundColor = '#333';
                collage.appendChild(empty);
            }
            
            card.appendChild(collage);
        } else {
            const img = document.createElement('img');
            img.src = 'default profile picture.png';
            img.style.width = '100%';
            img.style.height = '180px';
            img.style.objectFit = 'cover';
            card.appendChild(img);
        }
        
        const info = document.createElement('div');
        info.className = 'playlist-info';
        
        const h3 = document.createElement('h3');
        h3.textContent = playlist.name;
        
        const p = document.createElement('p');
        p.textContent = `${playlist.songs.length} songs`;
        
        info.appendChild(h3);
        info.appendChild(p);
        card.appendChild(info);
        
        card.addEventListener('click', () => {
            viewPlaylist(index);
            addToHistory('playlist');
        });
        playlistGrid.appendChild(card);
    });
}

function renderSongs() {
    songGrid.innerHTML = '';
    songs.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        
        const img = document.createElement('img');
        img.src = song.cover;
        
        const info = document.createElement('div');
        info.className = 'song-info';
        
        const h3 = document.createElement('h3');
        h3.textContent = song.title;
        
        const p = document.createElement('p');
        p.textContent = song.artist;
        
        info.appendChild(h3);
        info.appendChild(p);
        card.appendChild(img);
        card.appendChild(info);
        
        card.addEventListener('mouseenter', () => {
            gradientBackdrop.style.opacity = '0.3';
            gradientBackdrop.style.setProperty('--gradient-color-1', song.color);
            gradientBackdrop.style.setProperty('--gradient-color-2', getComplementaryColor(song.color));
        });
        
        card.addEventListener('mouseleave', () => {
            gradientBackdrop.style.opacity = '0.1';
        });
        
        card.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(song);
            audio.play();
        });
        
        songGrid.appendChild(card);
    });
    
    
    addHoverPlayButtons();
}

function renderLikedSongs() {
    songGrid.innerHTML = '';
    likedSongs.forEach(songIndex => {
        const song = songs[songIndex];
        const card = document.createElement('div');
        card.className = 'song-card';
        
        const img = document.createElement('img');
        img.src = song.cover;
        
        const info = document.createElement('div');
        info.className = 'song-info';
        
        const h3 = document.createElement('h3');
        h3.textContent = song.title;
        
        const p = document.createElement('p');
        p.textContent = song.artist;
        
        info.appendChild(h3);
        info.appendChild(p);
        card.appendChild(img);
        card.appendChild(info);
        
        card.addEventListener('mouseenter', () => {
            gradientBackdrop.style.opacity = '0.3';
            gradientBackdrop.style.setProperty('--gradient-color-1', song.color);
            gradientBackdrop.style.setProperty('--gradient-color-2', getComplementaryColor(song.color));
        });
        
        card.addEventListener('mouseleave', () => {
            gradientBackdrop.style.opacity = '0.1';
        });
        
        card.addEventListener('click', () => {
            currentSongIndex = songIndex;
            loadSong(song);
            audio.play();
        });
        
        songGrid.appendChild(card);
    });
    
    
    addHoverPlayButtons();
}

function addHoverPlayButtons() {
    document.querySelectorAll('.song-card').forEach((card, index) => {
       
        const existingBtn = card.querySelector('.hover-play-btn');
        if (existingBtn) {
            existingBtn.remove();
        }
        
        const playBtn = document.createElement('div');
        playBtn.className = 'hover-play-btn';
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
       
            let songIndex;
            if (currentPlaylist === 'all') {
                songIndex = index;
            } else if (currentPlaylist === 'favorites') {
                songIndex = likedSongs[index];
            } else {
                songIndex = playlists[currentPlaylist].songs[index];
            }
            
            currentSongIndex = songIndex;
            loadSong(songs[songIndex]);
            audio.play();
        });
        card.appendChild(playBtn);
    });
}

function viewPlaylist(index) {
    const playlist = playlists[index];
    
   
    hideAllViews();
    
   
    playlistView.classList.add('active');
    
   
    playlistCover.src = playlist.cover || 'https://via.placeholder.com/200';
    playlistNameDisplay.textContent = playlist.name;
    playlistDescription.textContent = playlist.description || `${playlist.songs.length} songs`;
    
   
    playlistSongList.innerHTML = '';
    playlist.songs.forEach((songIndex, i) => {
        const song = songs[songIndex];
        const li = document.createElement('li');
        li.className = 'song-item';
        
        const number = document.createElement('div');
        number.className = 'song-number';
        number.textContent = i + 1;
        
        const img = document.createElement('img');
        img.src = song.cover;
        
        const info = document.createElement('div');
        info.className = 'song-item-info';
        
        const h4 = document.createElement('h4');
        h4.textContent = song.title;
        
        const p = document.createElement('p');
        p.textContent = song.artist;
        
        info.appendChild(h4);
        info.appendChild(p);
        
        const duration = document.createElement('div');
        duration.className = 'song-item-duration';
        duration.textContent = song.duration;
        
        li.appendChild(number);
        li.appendChild(img);
        li.appendChild(info);
        li.appendChild(duration);
        
        li.addEventListener('click', () => {
            currentSongIndex = songIndex;
            loadSong(song);
            audio.play();
        });
        
        playlistSongList.appendChild(li);
    });
    
    currentPlaylist = index;
}

function playPlaylist() {
    if (typeof currentPlaylist === 'number') {
        const playlist = playlists[currentPlaylist];
        if (playlist.songs.length > 0) {
            currentSongIndex = playlist.songs[0];
            loadSong(songs[currentSongIndex]);
            audio.play();
        }
    }
}

function openPlaylistModal() {
    playlistModal.style.display = 'flex';
}

function closePlaylistModal() {
    playlistModal.style.display = 'none';
}

function savePlaylist() {
    const name = playlistNameInput.value.trim();
    if (name) {
        playlists.push({
            name: name,
            description: "Your custom playlist",
            cover: "",
            songs: []
        });
        
        renderPlaylists();
        renderPlaylistCards();
        playlistNameInput.value = '';
        closePlaylistModal();
    }
}

function toggleQueueModal() {
    queueModal.classList.toggle('active');
}

function toggleNowPlayingView() {
    nowPlayingView.classList.toggle('active');
}

function toggleSearchPanel() {
    searchPanel.classList.toggle('active');
}

function toggleLibraryView() {
    libraryView.classList.toggle('active');
}

function getComplementaryColor(hex) {
    
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    
 
    r = (255 - r).toString(16).padStart(2, '0');
    g = (255 - g).toString(16).padStart(2, '0');
    b = (255 - b).toString(16).padStart(2, '0');
    
    return `#${r}${g}${b}`;
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
    } else if (e.code === 'ArrowRight') {
        nextSong();
    } else if (e.code === 'ArrowLeft') {
        prevSong();
    } else if (e.code === 'ArrowUp') {
        audio.volume = Math.min(audio.volume + 0.1, 1);
        volumeSlider.value = audio.volume;
    } else if (e.code === 'ArrowDown') {
        audio.volume = Math.max(audio.volume - 0.1, 0);
        volumeSlider.value = audio.volume;
    }
});

window.addEventListener('load', init);
window.addEventListener('resize', handleResize);

function handleResize() {
    createVisualizerBars();
    createProgressVisualizer();
    addHoverPlayButtons();
}

window.addEventListener('beforeunload', () => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    if (spectrumAnimationId) {
        cancelAnimationFrame(spectrumAnimationId);
    }
    if (audioContext) {
        audioContext.close();
    }
});