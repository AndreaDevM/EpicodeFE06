import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../classes/client';
import { Fatture } from '../classes/fatture';
import { Invoices } from '../interfaces/invoices';
import { IstatoFatture } from '../interfaces/istato-fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  tenantID = 'fe_0621';
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA5ODIyMSwiZXhwIjoxNjQzOTYyMjIxfQ.2SgF85Ps7IQmx9oUKnLtukvC3Sy44rWsUEDUEIkFS2_M-8qVKzMkWEZDQgvVAexUUhp7G_vdbpUx75w3dlFVpQ';
  headers = new HttpHeaders();

  constructor(private http: HttpClient){
    this.headers = this.headers
                          .set("Authorization", this.bearerToken)
                          .set("X-TENANT-ID", this.tenantID)
                        }

  getAllFatture() {
    return this.http.get<Invoices>(environment.urlEpicode+'api/fatture?page=0&size=20&sort=id,DESC')
  }

  getFattureById(id: number) {
    return this.http.get<Fatture>(environment.urlEpicode+'api/fatture/'+id)
  }

  deleteFattura(id: number | undefined) {
    return this.http.delete(environment.urlEpicode+'api/fatture/' + id);
  }

  addFattura(item: Fatture) {
    return this.http.post<Fatture>(environment.urlEpicode+'api/fatture', item)
  }

  getStatoFattura() {
    return this.http.get<IstatoFatture>(environment.urlEpicode+'api/statifattura?page=0&size=20&sort=id,ASC')
  }

  getFattureByClient(item: Client) {
    return this.http.get<Invoices>(environment.urlEpicode+'api/fatture/cliente/' + item.id + '?page=0&size=20&sort=id,ASC')
  }

  saveFattura(item: Fatture) {
    return this.http.put<Fatture>(environment.urlEpicode+'/api/fatture/'+ item.id, item)
  }

}
