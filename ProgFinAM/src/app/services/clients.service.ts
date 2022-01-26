import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../classes/client';
import { Clients } from '../interfaces/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  tenantID = 'fe_0621';
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA5ODIyMSwiZXhwIjoxNjQzOTYyMjIxfQ.2SgF85Ps7IQmx9oUKnLtukvC3Sy44rWsUEDUEIkFS2_M-8qVKzMkWEZDQgvVAexUUhp7G_vdbpUx75w3dlFVpQ';
  headers = new HttpHeaders();

  constructor(private http: HttpClient){
    this.headers = this.headers
                          .set("Authorization", this.bearerToken)
                          .set("X-TENANT-ID", this.tenantID)
                        }

    getAllClients() {
      //return this.http.get(this.urlProva+'api/clienti?page=0&size=20&sort=id,ASC', {headers: this.headers})
      return this.http.get<Clients>(environment.urlEpicode+'api/clienti?page=0&size=20&sort=id,DESC')
    }

    getClientById(id: number) {
      return this.http.get<Client>(environment.urlEpicode+'api/clienti/'+id)
    }

    addClient(item: Client) {
      return this.http.post<Client>(environment.urlEpicode+'api/clienti/', item)
    }

    getTipoCliente() {
      return this.http.get<string[]>(environment.urlEpicode+'api/clienti/tipicliente')
    }

    saveClient(client: Client) {
      return this.http.put<Client>(environment.urlEpicode+'api/clienti/'+ client.id, client)
    }

    deleteClient(id: number | undefined) {
      return this.http.delete(environment.urlEpicode+'api/clienti/' + id);
    }
}