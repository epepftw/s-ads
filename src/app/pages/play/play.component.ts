import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  socket: any;

  partition: any = [
    {
      background: 'green',
      height: 1080,
      width: 500,
      position: 'absolute',
      left: 0,
      top: 0
    },
    {
      background: 'yellow',
      height: 1080,
      width: 500,
      position: 'absolute',
      left: 500,
      top: 0
    },
    {
      background: 'red',
      height: 1080,
      width: 500,
      position: 'absolute',
      left: 1000,
      top: 0
    },
    {
      background: 'blue',
      height: 1080,
      width: 500,
      position: 'absolute',
      left: 1500,
      top: 0
    }
  ]

  constructor(private _router: Router) { 
    this.socket = io('http://localhost:3000')
  }

  ngOnInit(): void {
    this.onUpdate();
  }


  onUpdate() {
    this.socket.on('gagoka_resib', (data: any) => {
      console.log(data);
      this._router.navigate(['setup']);
    });
  }
}
