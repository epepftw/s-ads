import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';
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
  key: any;

  constructor(
    private _router: Router,
  ) { 
    this.socket = io('http://localhost:5000', {transports : ['websocket']});
  }

  ngOnInit(): void {
  //  this.onUpdate();
    this.getData();
    this.acceptEvent();
    this.playerPlaying();
  }

  getData() {
    let localdata : any = localStorage.getItem('player_data');
    let jsonData : any = JSON.parse(localdata)
    this.jsonData = jsonData.screenData;
    console.log(jsonData)
    this.key = jsonData.keyData.key
  }

  goToKey() {
    this.socket.on('goToKey', (data: any) => {
      console.log(data);
      this.getData();
      this._router.navigate(['key']);
    });
  }

  acceptEvent() {
    this.socket.on('to-pi-ui', (data : {
      name : string;
      age: string;
    }) => {
      console.log('DAAAAAATAAA',data)
      this._router.navigate(['key'])
    })
  }  

  playerPlaying() {
    this.socket.emit('player', this.key)
  }
}

