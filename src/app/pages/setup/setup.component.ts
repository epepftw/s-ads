import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DownloadFileService } from 'src/app/core/services/downloadFile/download-file.service';
import { io } from "socket.io-client";
import { AssignKeyService } from 'src/app/core/services/assignKey/assign-key.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  downloadedCount: number = 0;
  download_headline: string = 'Downloading Player, Please Wait'

  savedFiles: any;
  socket: any;
  key : any;

  title: string = "Downloading Some Updates from Database";
  keyData: any;

  keyPlaylistAssets: any[] = [];

  download_progress: number = 0;

  constructor(
    private _router: Router,
    private _activatedRoute : ActivatedRoute,
    private _downloadFile: DownloadFileService,
    private _assignKey: AssignKeyService
  ) { }

  ngOnInit(): void {
    this.getQueryParams();
    this.getKeyData();
    
    this.socket = io('http://localhost:5000', {transports : ['websocket']});

    this.socket.on('connect', () => {
      this.onAssetDownloaded();
    })
  }

  getQueryParams() {
    this._activatedRoute.queryParams.subscribe(params => {
      this.key = params.key;
      console.log('#DFDFF',params.key)
    })
  }

  getKeyData() {
    this._assignKey.assign_key(this.key).subscribe(
      (data : any) => {
        this.keyData = data;
        console.log(data)
        localStorage.setItem('player_data', JSON.stringify(this.keyData))
        this.getKeyPlaylistContents();
      }
    )
  }

  getKeyPlaylistContents() {
    if (this.keyData.screenData && this.keyData.screenData.zones.length > 0) {
      this.keyData.screenData.zones.forEach((z: any) => {
        z.zone_playlist_data.contents.forEach((c: any) => {
          this.keyPlaylistAssets.push(c);  
        });
      });

      this.downloadData();
      console.log(this.keyPlaylistAssets);
    }
  }

  downloadData() {
    this._assignKey.download(this.keyData).subscribe((data: any) => {
      console.log(data);
    })
  }

  onAssetDownloaded() {
    this.socket.on('asset_downloaded', (data: any) => {
      this.downloadedCount += 1;

      console.log('Downloaded File', data);

      this.download_progress = (this.downloadedCount / this.keyPlaylistAssets.length) * 100;
      console.log(this.download_progress);

      if (this.downloadedCount === this.keyPlaylistAssets.length) {
        this.download_headline = "All assets downloaded, redirecting to player."
        
        setTimeout(() => {
          this._router.navigate(['play']);
        }, 4000)
      }
    })
  }
}
