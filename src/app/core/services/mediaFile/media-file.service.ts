import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaFileService {

  constructor(private _http: HttpClient) { }

  get_mediaFiles() {
    return this._http.get(`${environment.cloud_api}${environment.get.get_mediaFiles}`)

  }
 

  //School
  get_json_data_school1(): Observable<any> {
    return this._http.get("http://localhost:3000/school/school1.json")
  }
  get_json_data_school(): Observable<any> {
    return this._http.get("http://localhost:3000/school/school.json")
  }
  get_json_data_school_split(): Observable<any> {
    return this._http.get("http://localhost:3000/school/schoolsplit.json")
  }

  //Hospital
  get_json_data_hospital(): Observable<any> {
    return this._http.get("http://localhost:3000/hospital/hospital-split.json")
  }
  get_json_data_hospital1(): Observable<any> {
    return this._http.get("http://localhost:3000/hospital/hospital1.json")
  }
  get_json_data_hospital2(): Observable<any> {
    return this._http.get("http://localhost:3000/hospital/hospital2.json")
  }

  //Mall
  get_json_data_mall(): Observable<any> {
    return this._http.get("http://localhost:3000/mall/mall.json")
  }
  get_json_data_mall1(): Observable<any> {
    return this._http.get("http://localhost:3000/mall/mall1.json")
  }
  get_json_data_mall2(): Observable<any> {
    return this._http.get("http://localhost:3000/mall/mall2.json")
  }

}
