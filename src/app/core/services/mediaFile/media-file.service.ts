import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaFileService {

  constructor(private _http: HttpClient) { }

  get_mediaFiles() {
    return this._http.get(`${environment.cloud_api}${environment.get.get_mediaFiles}`)
  }
}
