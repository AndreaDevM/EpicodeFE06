import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from '../classes/client';
import { ClientsService } from '../services/clients.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];

  clientEdit!: Client;

  constructor(private clientService: ClientsService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(data => this.clients = data.content)
  }

  addClient() {
    this.router.navigate(['/client/new'])
  }

  clientDetails(item: Client) {
    this.router.navigate(['client', item.id ,'details'])
  }

  editClient(content: any, item: Client) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.clientEdit = Object.assign({}, item);
  }

  saveChanges() {
    this.modalService.dismissAll();
    this.clientService.saveClient(this.clientEdit).subscribe(res => console.log(res))
    console.log(this.clientEdit)
  }

  deleteClient(item: Client) {
    this.clientService.deleteClient(item.id).subscribe(data => {console.log('Elemento eliminato: ' + data)})
  }

}