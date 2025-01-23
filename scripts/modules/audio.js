const audioElement = document.getElementById('audioElement');
const pauseButton = document.getElementById('pauseButton');
const seekBar = document.getElementById('seekBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const muteButton = document.getElementById('muteButton');
const volumeSlider = document.getElementById('volumeSlider');

// play / pause
pauseButton.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        pauseButton.textContent = '❚❚';
    } else {
        audioElement.pause();
        pauseButton.textContent = '▶';
    }
});

// update seek bar and duration time
audioElement.addEventListener('timeupdate', () => {
    const currentTime = audioElement.currentTime;
    const duration = audioElement.duration;
    seekBar.value = (currentTime / duration) * 100;

    // Format time
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
});

// add functionality to seekbar
seekBar.addEventListener('input', () => {
    const duration = audioElement.duration;
    audioElement.currentTime = (seekBar.value / 100) * duration;
});

// duration display
audioElement.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = `${Math.floor(audioElement.duration / 60)}:00`;
});

// mute functionality
muteButton.addEventListener('click', () => {
    if (audioElement.muted) {
        audioElement.muted = false;
        muteButton.textContent = '⊘'; //change icon
        volumeSlider.value = audioElement.volume * 100;
    } else {
        audioElement.muted = true;
        muteButton.textContent = '♫';
        volumeSlider.value = 0; // set volume slider to 0 (since it's muted)
    }
});

// volume control
volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value / 100;
    audioElement.volume = volume;
    audioElement.muted = volume === 0; // auto-mute if volume is 0
    muteButton.textContent = volume === 0 ? '♫' : '⊘'; // update mute button state
});