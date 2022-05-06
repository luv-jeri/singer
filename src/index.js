import './css/index.css';
import './css/cards.css';

import SONGS from './assets/index.js';
import { play } from './controllers/musicControllers.js';
import switchClass from './utils/switch.js';
console.log(SONGS);
let currentSong = 0;

const cover_img = document.getElementById('cover');
const playBtn = document.getElementById('play');
const progressBar = document.getElementById('progress');
const list = document.getElementById('list');
document.getElementById('back').addEventListener('click', () => {
  music.currentTime += 30;
})
list.classList.add('list-wrapper');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progressWrapper = document.getElementById('progress-container');

//Display the music list
const displayList = () => {
  SONGS.forEach((el, index) => {
    const card = document.createElement('div');

    card.addEventListener('click', () => {
      if (music.src === el.song && !music.paused) {
        music.pause();
        return;
      }
      music.src = el.song;
      cover_img.src = el.cover;
      play(music);
      currentSong = index;
    });
    const cover = document.createElement('img');
    cover.width = '100';
    const title = document.createElement('h3');
    cover.src = el.cover;
    title.innerHTML = el.title.toUpperCase();
    card.append(cover, title);
    card.classList.add('music-card');

    list.appendChild(card);
  });
};

let music = new Audio(SONGS[0].song);
music.volume = 0.1;

const onEnd = () => {
  music.currentTime = 0;
};

const onStart = () => {};

const scrub = function (e) {
  const { clientWidth } = this;
  const { offsetX } = e;
  const { duration } = music;
  const scrubTime = (offsetX / clientWidth) * duration;
  music.currentTime = scrubTime;
};

const timeUpdate = () => {
  const percent = (music.currentTime / music.duration) * 100;
  progressBar.style.width = `${percent}%`;
};

//` Setting up the music player
playBtn.addEventListener('click', () => {
  play(music);
});

music.addEventListener('ended', onEnd);
music.addEventListener('timeupdate', timeUpdate);
progressWrapper.addEventListener('click', scrub);

displayList();

next.addEventListener('click', () => {
  currentSong++;
  if (currentSong > SONGS.length - 1) {
    currentSong = 0;
  }
  music.src = SONGS[currentSong].song;
  cover_img.src = SONGS[currentSong].cover;
  play(music);
});

prev.addEventListener('click', () => {
  currentSong--;
  if (currentSong < 0) {
    currentSong = SONGS.length - 1;
  }

  music.src = SONGS[currentSong].song;
  cover_img.src = SONGS[currentSong].cover;
  play(music);
});
