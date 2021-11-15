import { Component, OnInit } from '@angular/core';
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
  jsonData: any;

  constructor() { 
    this.socket = io('http://localhost:5000', {transports : ['websocket']});
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
