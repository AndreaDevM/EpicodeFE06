import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';
import { Comune } from '../classes/comune';
import { IndirizzoSedeLegale } from '../classes/indirizzo-sede-legale';
import { IndirizzoSedeOperativa } from '../classes/indirizzo-sede-operativa';
import { Provincia } from '../classes/provincia';
import { ClientsService } from '../services/clients.service';
import { ComuniService } from '../services/comuni.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  tipoCliente: string[] = [];
  comuneArr: Comune[] = [];

  client: Client = new Client();
  comune: Comune = new Comune();
  provincia: Provincia = new Provincia();

  constructor(private router: Router,
    private clientsService: ClientsService,
    private comuniService: ComuniService) { }

  ngOnInit(): void {
    this.clientsService.getTipoCliente().subscribe(data => this.tipoCliente = data)
    this.comuniService.getAllComuni().subscribe(data => this.comuneArr = data.content)
  }

  saveClient() {
    console.log(this.client)
    this.clientsService.addClient(this.client).subscribe(response => console.log(response))
    this.router.navigate(['clients'])
  }

}
