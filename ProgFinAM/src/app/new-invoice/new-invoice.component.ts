import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';
import { Fatture } from '../classes/fatture';
import { StatoFatture } from '../classes/stato-fatture';
import { ClientsService } from '../services/clients.service';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {

  clients: Client[] = [];
  fattura: Fatture = new Fatture();
  statoFattura: StatoFatture[] = [];

  constructor(private router: Router,
    private fattureService: FattureService,
    private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.getAllClients().subscribe(data => this.clients = data.content)
    this.fattureService.getStatoFattura().subscribe(data => this.statoFattura = data.content)
  }

  addFattura() {
    this.fattureService.addFattura(this.fattura).subscribe(data => console.log(data))
  }

}
