import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DownloadFileService } from 'src/app/services/downloadFile/download-file.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.scss']
})
export class FileDownloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
