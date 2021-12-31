import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignKeyService {

  constructor(private _http: HttpClient) { }

  assign_key(key: string) : Observable<any> {
    return this._http.get(`${environment.base_uri}${environment.get.register_key}?key=${key}`)
  }

  download(data: any): Observable<any> {
    console.log('topass', data);
    return this._http.post(`${environment.base_uri}${environment.get.download}`, data);
  }
}
