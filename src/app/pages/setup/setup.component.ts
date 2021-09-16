import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadFileService } from 'src/app/core/services/downloadFile/download-file.service'

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  savedFiles: any;

  title: string = "Downloading Some Updates from Database";
  count: number = 5;

  constructor(private _router: Router,
              private _downloadFile: DownloadFileService) { }

  ngOnInit(): void {

    setTimeout(() => {
      this._router.navigate(['play'])
    }, 5000)
  }

  saveUploadedFile(data: any) {
    this._downloadFile.save_uploaded_file(data).subscribe(
      (data: any) => {
        this.savedFiles = data;
        console.log('SAVED fiLES', this.savedFiles)
      }
    )
  }

}
