import { Component ,ViewChild,ElementRef} from '@angular/core';
import { MediaPlayer } from 'dashjs';
@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoPlayerComponent {
  title = 'cineo-app';

  name = "Angular";
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;


  ngOnInit(){
    let url = "http://localhost:9428/api/manifests/";
    let player = MediaPlayer().create();
    player.initialize(document.querySelector('#myMainVideoPlayer'), url, true);
    player.updateSettings({
      streaming:
      {
          liveDelay: 2,
          liveCatchup: {
            minDrift: 0.05,
            playbackRate: 0.5,
            latencyThreshold: 30,    
        }
      }
  });
  }
  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
  }

  skip(value) {
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }
}
