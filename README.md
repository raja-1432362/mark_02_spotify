# mark_02_spotify
In this repository, I developed a Spotify clone with innovative features, enhancing the user experience beyond the original platform.

## Overview
This project is a responsive Spotify Premium clone web application built with HTML, CSS, and JavaScript. It mimics the core functionality and visual design of Spotify's premium interface, including music playback, playlists, visualizers, and various interactive elements.

## Features

### Core Features
- **Music Player**: Play, pause, skip tracks, and adjust volume
- **Visualizer**: Dynamic audio visualizer with beat detection
- **Playlists**: View and create custom playlists
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Now Playing View**: Full-screen player with album art and controls
- **Queue Management**: View current and recently played tracks

### Interactive Elements
- Animated particles that respond to music beats
- Audio spectrum visualization
- Gradient backdrops that change with the current song
- Vinyl record animation during playback
- Hover effects on song cards

### Navigation
- Sidebar with home, search, and library sections
- Playlist management
- History tracking with back/forward navigation

## Technical Details

### Structure
- Single-page application with dynamic content loading
- Modular CSS with variables for theming
- Vanilla JavaScript for all functionality (no external frameworks)

### Audio Handling
- Web Audio API for visualization and analysis
- HTML5 Audio element for playback
- Custom beat detection algorithm

### Visual Effects
- CSS animations and transitions
- Canvas-like effects using DOM elements
- Responsive design with media queries

## Installation
No installation required - this is a client-side web application. Simply open the `index.html` file in a modern web browser.

## Usage
1. Click on any song to start playback
2. Use the player controls at the bottom to manage playback
3. Navigate through different views using the sidebar
4. Create new playlists using the "Create Playlist" button

## Browser Support
The application should work in all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Known Limitations
- Audio files are not included in the repository (placeholder audio is used)
- Some advanced Spotify features are not implemented (social features, recommendations, etc.)
- Persistent storage (playlists are only saved for the current session)

## Future Improvements
- Add localStorage support to save playlists between sessions
- Implement a proper backend for music storage
- Add user authentication
- Implement search functionality
- Add more customization options

## Credits
- Font Awesome for icons
- Spotify for design inspiration

## License
This project is open-source and available for educational purposes.
