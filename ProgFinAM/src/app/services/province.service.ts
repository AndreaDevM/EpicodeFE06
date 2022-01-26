import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Provincia } from '../classes/provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  tenantID = 'fe_0621';
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA5ODIyMSwiZXhwIjoxNjQzOTYyMjIxfQ.2SgF85Ps7IQmx9oUKnLtukvC3Sy44rWsUEDUEIkFS2_M-8qVKzMkWEZDQgvVAexUUhp7G_vdbpUx75w3dlFVpQ';
  headers = new HttpHeaders();

  constructor(private http: HttpClient){
    this.headers = this.headers
                          .set("Authorization", this.bearerToken)
                          .set("X-TENANT-ID", this.tenantID)
                        }

  getAllProvince() {
    return this.http.get<Provincia>(environment.urlEpicode+'/api/province?page=0&size=20&sort=id,ASC')
  }
}
