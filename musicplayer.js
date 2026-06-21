window.musicplayer = {};

musicplayer.playing = false;
musicplayer.song = 0;

musicplayer.getSongFile = function (include, index) {
    let songs = ["1. hesitation [fj7MHkCgGxk].webm.mp3", "2. Online Lobby [HkNSxhzNgW0].webm.mp3", "3. meaningful love (instrumental) [A_IlqfBhhKU].webm.mp3",
        "4. resonance (midwest emo version) [LdVtUo-xngw].webm.mp3", "5. Credits Song for My Death [lrXADTo3AeI].webm.mp3", "6. caffeine rush [mYU9dTyDUnY].webm.mp3"];
    if (include) {
        return "sounds/music/" + songs[index];
    } else {
        return songs[index];
    }
}

musicplayer.loadNewSong = function (index) {
    const playingsong = document.getElementById("music-text");
    const pauseplay = document.getElementById("pauseplay");
    const musicplayerDOM = document.getElementById("music-player");
    playingsong.textContent = musicplayer.getSongFile(false, index);
    musicplayerDOM.setAttribute("src", musicplayer.getSongFile(true, index));
    musicplayerDOM.play();
    musicplayer.playing = true;
    pauseplay.textContent = "⏸";
}

document.addEventListener("DOMContentLoaded", () => {
    const pauseplay = document.getElementById("pauseplay");
    const prevsong = document.getElementById("prev-song");
    const nextsong = document.getElementById("next-song");

    const musicplayerDOM = document.getElementById("music-player");

    musicplayerDOM.addEventListener("ended", () => {
        if (musicplayer.song == 5) {
            musicplayer.loadNewSong(0);
            musicplayer.song = 0;
        } else {
            musicplayer.loadNewSong(musicplayer.song + 1);
            musicplayer.song += 1;
        }
    })

    pauseplay.addEventListener("click", () => {
        if (musicplayer.playing == true) {
            musicplayer.playing = false;
            musicplayerDOM.pause();
            pauseplay.textContent = "▶"
        } else {
            musicplayer.playing = true;
            musicplayerDOM.play();
            pauseplay.textContent = "⏸"
        }
    })

    prevsong.addEventListener("click", () => {
        if (musicplayer.song == 0) {
            musicplayer.loadNewSong(5);
            musicplayer.song = 5;
        } else {
            musicplayer.loadNewSong(musicplayer.song - 1);
            musicplayer.song -= 1;
        }
    })

    nextsong.addEventListener("click", () => {
        if (musicplayer.song == 5) {
            musicplayer.loadNewSong(0);
            musicplayer.song = 0;
        } else {
            musicplayer.loadNewSong(musicplayer.song + 1);
            musicplayer.song += 1;
        }
    })
})
