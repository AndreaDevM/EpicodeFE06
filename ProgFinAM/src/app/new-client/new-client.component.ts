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

  /*client: Client = new Client();*/
  comune: Comune = new Comune();
  provincia: Provincia = new Provincia();

  client: Client = {
    id: 7685,
    ragioneSociale: 'A',
    partitaIva: 'B',
    tipoCliente: 'C',
    email: 'D',
    pec: 'E',
    telefono: 0,
    nomeContatto: 'F',
    cognomeContatto: 'G',
    telefonoContatto: 0,
    emailContatto: 'H',
    indirizzoSedeOperativa: {
      id: 0,
      via: 'I',
      civico: 0,
      cap: 0,
      localita: 'J',
      comune: {
        id: 1,
        nome: 'K',
        provincia: {
          id: 1,
          nome: 'L',
          sigla: 'M'
        }
      }
    },
    indirizzoSedeLegale: {
      id!: 7,
      via: 'N',
      civico: 0,
      cap: 0,
      localita: 'O',
      comune: {
        id: 1,
        nome: 'P',
        provincia: {
          id: 1,
          nome: 'Q',
          sigla: 'R'
        }
      }
    },
    dataInserimento: '2019-05-13T03:14:39.854+00:00',
    dataUltimoContatto: '2021-03-05T02:06:28.393+00:00',
    fatturatoAnnuale: ''
  };

  constructor(private router: Router,
    private clientsService: ClientsService,
    private comuniService: ComuniService) { }

  ngOnInit(): void {
    this.clientsService.getTipoCliente().subscribe(data => this.tipoCliente = data)
    this.comuniService.getAllComuni().subscribe(data => this.comuneArr = data.content)
  }

  saveClient() {
    console.log(this.client)
    //this.clientsService.addClient(this.client).subscribe(response => console.log(response))
    //this.router.navigate(['clients'])
  }

}
