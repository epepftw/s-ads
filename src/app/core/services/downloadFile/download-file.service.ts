import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(private _http: HttpClient) { }

  save_uploaded_file(data: any) {
    return this._http.post(`${environment.base_uri}${environment.post.save_contents}`, data)
  }
}
