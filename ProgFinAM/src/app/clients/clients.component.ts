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

  clientDetails(id: number) {
    this.router.navigate(['client', id ,'details'])
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

  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(data => {console.log(data)})
  }

}