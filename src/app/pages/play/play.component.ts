import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';
import { io } from "socket.io-client";
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
    private _assignKey: AssignKeyService
  ) { 
    this.socket = io('http://localhost:5000', {transports : ['websocket']});
  }

  ngOnInit(): void {
  //  this.onUpdate();
    this.getData();
    this.acceptEvent();
    this.playerPlaying();
    this.acceptUpdate();
  }

  getData() {
    let localdata : any = localStorage.getItem('player_data');
    
    if(localdata){
      let jsonData : any = JSON.parse(localdata)
      this.jsonData = jsonData.screenData;
      console.log(jsonData)
      this.key = jsonData.keyData.key

    }else{
      this._router.navigate(['key']);
    }
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
      advertiser_name : string;
      key: string;
    }) => {
      console.log('DAAAAAATAAA',data)
      this._router.navigate(['key'])
    })
  }  

  acceptUpdate(){
    this.socket.on('keyData', (data : {
      advertiser_name : string;
      key: string;
    }) => {
      console.log('NOICE RESHIV', data.key)
      this._router.navigate(['/setup'], {queryParams : { key : data.key}});
    })
  }

  playerPlaying() {
    this.socket.emit('player', this.key)
  }
}

