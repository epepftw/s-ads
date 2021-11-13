import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  screen_id : string = '';
  socket: any;
  mediaFiles: any[] = [];
  jsonData: any;
  jsonContents: any[] = [];
  screen_data : any;

  constructor(private _router: Router,
              private _activatedRoute : ActivatedRoute,
              private _mediaFiles: MediaFileService,
              private _assignKey: AssignKeyService) { 
    this.socket = io('http://localhost:3200')
  }

  ngOnInit(): void {
  //  this.onUpdate();
    this.getData();
  }

  getData() {
    let localdata : any = localStorage.getItem('player_data');
    let jsonData : any = JSON.parse(localdata)
    this.jsonData = jsonData.screenData;
    console.log(this.jsonData)
  }
}
