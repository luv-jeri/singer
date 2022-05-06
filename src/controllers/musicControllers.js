import switchClass from '../utils/switch';

export const play = (music) => {
  const play = document.querySelector('#play i');
  if (music.paused) {
    music.play();
    wrapper.classList.add('play'); // FIXME : Do this by using GSAP
    switchClass(play, 'fa-pause', 'fa-play');
    return null;
  }
  switchClass(play, 'fa-play', 'fa-pause');
  wrapper.classList.remove('play'); // FIXME : Do this by using GSAP
  music.pause();
};




