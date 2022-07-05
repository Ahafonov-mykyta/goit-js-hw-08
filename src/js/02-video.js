import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME= "videoplayer-current-time";
const iframe = document.querySelector("iframe")
console.log (iframe)

const player = new Player(iframe);



const onPlay = function(data) {
localStorage.setItem( CURRENT_TIME, data.seconds);
console.log (localStorage.getItem( CURRENT_TIME))
};


player.on('timeupdate', throttle(onPlay, 1000));

const storageData = localStorage.getItem( CURRENT_TIME);

if (storageData) {
    player.setCurrentTime(storageData)
}