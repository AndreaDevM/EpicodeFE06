import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../classes/client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  client: Client = new Client;

  constructor(private clientService: ClientsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.clientService.getClientById(data['id']).subscribe(response => {
        this.client = response
        })
      });
    }};
