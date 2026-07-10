window.musicplayer = {};

musicplayer.playing = false;
musicplayer.song = 0;

musicplayer.getSongFile = function (include, index) {
    let songs = ["1. hesitation by Shiloh Dynasty, VAL and Zuriel.mp3", "2. strangers by biosphere.mp3", "3. glasswork corrosion by AZALI.mp3",
        "4. Sunshower by HOME.mp3", "5. Sweden by C418.mp3", "6. cogito, ergo sum by far.mp3"];
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
        window.onbeforeunload = function () { return "music is still playing!" };
        pauseplay.textContent = "⏸";
    } else {
        musicplayerDOM.pause();
        window.onbeforeunload = null;
        musicplayer.playing = false;
        pauseplay.textContent = "▶";
    }
    navigator.mediaSession.metadata = new MediaMetadata({
        title: musicplayer.getSongFile(false, index)
    })
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
            musicplayer.loadNewSong(0, false);
        } else {
            musicplayer.loadNewSong(musicplayer.song + 1, true);
        }
    })

    musicplayerDOM.addEventListener("pause", () => {
        // possible through MPRIS
        musicplayer.playing = false;
        musicplayerDOM.pause();
        pauseplay.textContent = "▶"
        window.onbeforeunload = null;
    })

    musicplayerDOM.addEventListener("play", () => {
        musicplayer.playing = true;
        musicplayerDOM.play();
        pauseplay.textContent = "⏸"
        window.onbeforeunload = function () { return "music is still playing!" };
    })

    if (getCookie("musicplayer.autoplay") == undefined) {
        document.cookie = "musicplayer.autoplay=false";
    }

    if (getCookie("musicplayer.autoplay") == "true") {
        let donebody = false;
        document.getElementsByTagName("body")[0].addEventListener("click", () => {
            if (donebody == false) {
                musicplayer.playing = true;
                musicplayerDOM.play();
                pauseplay.textContent = "⏸"
                window.onbeforeunload = function () { return "music is still playing!" };
            }
            donebody = true;
        })
    }


    pauseplay.addEventListener("click", () => {
        if (musicplayer.playing == true) {
            musicplayer.playing = false;
            musicplayerDOM.pause();
            pauseplay.textContent = "▶"
            window.onbeforeunload = null;
        } else {
            musicplayer.playing = true;
            musicplayerDOM.play();
            pauseplay.textContent = "⏸"
            window.onbeforeunload = function () { return "music is still playing!" };
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

    navigator.mediaSession.setActionHandler("nexttrack", () => {
        if (musicplayer.song == 5) {
            musicplayer.loadNewSong(0, true);
        } else {
            musicplayer.loadNewSong(musicplayer.song + 1, true);
        }
    })

    navigator.mediaSession.setActionHandler("previoustrack", () => {
        if (musicplayer.song == 0) {
            musicplayer.loadNewSong(5, true);
        } else {
            musicplayer.loadNewSong(musicplayer.song - 1, true);
        }
    })
})
