import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comune } from '../classes/comune';
import { Comuni } from '../interfaces/comuni';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {
  tenantID = 'fe_0621';
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA5ODIyMSwiZXhwIjoxNjQzOTYyMjIxfQ.2SgF85Ps7IQmx9oUKnLtukvC3Sy44rWsUEDUEIkFS2_M-8qVKzMkWEZDQgvVAexUUhp7G_vdbpUx75w3dlFVpQ';
  headers = new HttpHeaders();

  constructor(private http: HttpClient){
    this.headers = this.headers
                          .set("Authorization", this.bearerToken)
                          .set("X-TENANT-ID", this.tenantID)
                        }

  getAllComuni() {
    return this.http.get<Comuni>(environment.urlEpicode+'api/comuni?page=0&size=20&sort=id,DESC')
  }

  getComuneById(id: number) {
    return this.http.get<Comune>(environment.urlEpicode+'api/comuni/' + id)
  }

  addComune(item: Comune) {
    return this.http.post<Comune>(environment.urlEpicode+'api/comuni/', item)
  }

  saveComune(item: Comune) {
    return this.http.put<Comune>(environment.urlEpicode+'api/comuni/'+ item.id, item)
  }

  deleteComune(id: number | undefined) {
    return this.http.delete(environment.urlEpicode+'api/comuni/' + id);
  }

}
