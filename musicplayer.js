window.musicplayer = {};

musicplayer.playing = false;
musicplayer.song = 0;

musicplayer.getSongFile = function (include, index) {
    let songs = ["1. hesitation [fj7MHkCgGxk].webm.mp3", "2. strangers [4oRlbl8UqL8].webm.mp3", "3. glasswork corrosion [vLryRtBfWQA].webm.mp3",
        "4. Sunshower [_u58MXgRjGQ].webm.mp3", "5. Sweden [5w3rRFWzjcM].webm.mp3", "6. cogito, ergo sum [O9lUFztehfY].webm.mp3"];
    if (include) {
        return "sounds/music/" + songs[index];
    } else {
        return songs[index];
    }
}

musicplayer.loadNewSong = function (index, autoplay) {
    const playingsong = document.getElementById("music-text");
    const pauseplay = document.getElementById("pauseplay");
    const musicplayerDOM = document.getElementById("music-player");
    musicplayer.song = index;
    document.cookie = "musicplayer.currentSong=" + index;
    playingsong.textContent = musicplayer.getSongFile(false, index);
    musicplayerDOM.setAttribute("src", musicplayer.getSongFile(true, index));
    if (autoplay) {
        musicplayerDOM.play();
        musicplayer.playing = true;
        pauseplay.textContent = "⏸";
    } else {
        musicplayerDOM.pause();
        musicplayer.playing = false;
        pauseplay.textContent = "▶";
    }
}

document.addEventListener("DOMContentLoaded", () => {

    if (getCookie("musicplayer.currentSong") == undefined) {
        document.cookie = "musicplayer.currentSong=0";
    }

    musicplayer.loadNewSong(Number(getCookie("musicplayer.currentSong")), false);

    const pauseplay = document.getElementById("pauseplay");
    const prevsong = document.getElementById("prev-song");
    const nextsong = document.getElementById("next-song");

    const musicplayerDOM = document.getElementById("music-player");

    musicplayerDOM.addEventListener("ended", () => {
        if (musicplayer.song == 5) {
            musicplayer.loadNewSong(0);
        } else {
            musicplayer.loadNewSong(musicplayer.song + 1);
        }
    })

    if (getCookie("musicplayer.autoplay") == undefined) {
        document.cookie = "musicplayer.autoplay=true";
    }

    if (getCookie("musicplayer.autoplay") == "true") {
        let donebody = false;
        document.getElementsByTagName("body")[0].addEventListener("click", () => {
            if (donebody == false) {
                musicplayer.playing = true;
                musicplayerDOM.play();
                pauseplay.textContent = "⏸"
            }
            donebody = true;
        })
    }


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
            musicplayer.loadNewSong(5, true);
        } else {
            musicplayer.loadNewSong(musicplayer.song - 1, true);
        }
    })

    nextsong.addEventListener("click", () => {
        if (musicplayer.song == 5) {
            musicplayer.loadNewSong(0, true);
        } else {
            musicplayer.loadNewSong(musicplayer.song + 1, true);
        }
    })
})
