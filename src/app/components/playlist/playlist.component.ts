import { Component, Input, OnInit } from '@angular/core';
import { ImagePipe } from 'src/app/core/pipe/image/image.pipe'

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  providers: [ImagePipe]
})
export class PlaylistComponent implements OnInit {
  @Input() playlist_data:  any[] = [];
  @Input() is_single_demo: boolean = false; 
  current_assets : string = '';
  current_file_type : string = '';
  current_sequence : number = 0;
  img_duration : number = 6;

  constructor(
    private _image : ImagePipe
  ) { }

  ngOnInit(): void {
    if(this.playlist_data.length) {
      this.checkFileType(this.current_sequence)
    }
  }
  checkFileType(sequence : number) : void {
    setTimeout(() => {
      this.current_file_type = this.playlist_data[sequence].mimetype;
      this.img_duration = this.playlist_data[sequence].duration;
      console.log('Current File Type : ', sequence, this.current_file_type, this.playlist_data[sequence].duration)
      if(this._image.transform(this.playlist_data[sequence].mimetype)) {
        console.log('image')
        this.displayImage(this.playlist_data[sequence].file_url)
      } else if (this.current_file_type == 'video/mp4') {
        console.log('video')
        this.displayVideo(this.playlist_data[sequence].file_url)
      }
    }, 0)
  }

  displayImage(image_url : string) {
    this.current_assets = image_url;
    this.runImageDuration();
  }

  displayVideo(video_url : string) {
    this.current_assets = video_url;
  }

  onVideoEnded() {
    this.current_file_type = '';
    this.current_assets = '';
    if(this.current_sequence < this.playlist_data.length - 1) {
      this.current_sequence += 1;
      this.checkFileType(this.current_sequence)
      console.log('FIRE1')
    } else {
      this.current_sequence = 0;
      this.checkFileType(this.current_sequence)
      console.log('FIRE2')
    }
    console.log('FIRE')
  }

  runImageDuration() {
    setTimeout(() => {
      if(this.current_sequence < this.playlist_data.length - 1) {
        this.current_sequence += 1;
        this.checkFileType(this.current_sequence)
        console.log('FIRE1')
      } else {
        this.current_sequence = 0;
        this.checkFileType(this.current_sequence)
        console.log('FIRE2')
      }
      this.current_file_type = '';
      this.current_assets = '';
    }, this.img_duration * 1000)
  }

}
