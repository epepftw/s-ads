import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { io } from "socket.io-client";
import { MediaFileService } from 'src/app/core/services/mediaFile/media-file.service';
////////////////TO MOVE////////////////////////////////
import { AssignKeyService } from 'src/app/core/services/assignKey/assign-key.service';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  socket: any;
  mediaFiles: any[] = [];
  jsonData: any;
  jsonContents: any[] = [];

  constructor(private _router: Router,
              private _mediaFiles: MediaFileService,
              private _assignKey: AssignKeyService) { 
    this.socket = io('http://localhost:3200')
  }

  ngOnInit(): void {
  //  this.onUpdate();
    this.getData();
    this.getMediaFiles();
  }

  getMediaFiles() {
    this._mediaFiles.get_mediaFiles().subscribe(
      (media: any) =>  {
        this.mediaFiles = media;
        console.log('#MEDIA FILES', this.mediaFiles)
      }
    )
  }

  onUpdate() {
    this.socket.on('buttonUpdate', (data: any) => {
      console.log(data);
      this.getMediaFiles();
      this._router.navigate(['setup']);
    });
  }

  getData() {
    this._mediaFiles.get_json_data_mall().subscribe(
      (data : any) => {
        this.jsonData = data.zones;
        console.log('hlloww',data.zones)
      }
    )
  }
}
