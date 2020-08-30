import { urls } from './data';

class SoundsPlayer {
  audio = new Audio()

  play = (src: string) => {
    if (!this.audio.ended) {
      this.audio.pause();
    }
    this.audio.src = src;
    this.audio.play();
  }

  playFail = () => {
    this.play(urls.fail);
  }

  playSuccess = () => {
    this.play(urls.success);
  }

  playNotification = () => {
    this.play(urls.notification);
  }
}

export default SoundsPlayer;
