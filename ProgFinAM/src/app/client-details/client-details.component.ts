import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { Fatture } from '../classes/fatture';
import { ClientsService } from '../services/clients.service';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  client: Client = new Client;
  fatturaCliente: Fatture[] = []

  constructor(private clientService: ClientsService,
    private fattureService: FattureService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.clientService.getClientById(data['id']).subscribe(response => {
        this.client = response
        this.fattureService.getFattureByClient(this.client).subscribe(data => this.fatturaCliente = data.content)
        })
      });
  }

    clientInvoices(client: Client) {
      this.router.navigate(['client', client.id,'invoices']);
    }
  
};
