import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time"

player.on('timeupdate', () => {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem(LOCALSTORAGE_KEY, seconds);
    });
});

player.on('loaded', () => {
    const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);
    player.setCurrentTime(savedTime).then(function (seconds) {
        console.log(seconds);
    }).catch(function (error) {
        switch (error.name) {
            case "RangeError" :
                break;
        }
    });
});
