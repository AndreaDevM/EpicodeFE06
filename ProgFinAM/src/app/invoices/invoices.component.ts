import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Fatture } from '../classes/fatture';
import { StatoFatture } from '../classes/stato-fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  fatture: Fatture[] = [];
  fatturaCopy!: Fatture;
  statoFattura: StatoFatture[] = [];

  constructor(private fattureService: FattureService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.fattureService.getAllFatture().subscribe(data => this.fatture = data.content)
    this.fattureService.getStatoFattura().subscribe(data => this.statoFattura = data.content)
  }

  addInvoice() {
    this.router.navigate(['invoices/new']);
  }

  invoiceDetails(item: Fatture) {
    this.router.navigate(['invoices', item.id, 'details']);
  }

  deleteInvoice(item: Fatture) {
    this.fattureService.deleteFattura(item.id).subscribe(response => console.log(response))
  }

  editFattura(content: any, item: Fatture) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.fatturaCopy = Object.assign({}, item);
  }

  saveChanges() {
    this.modalService.dismissAll();
    this.fattureService.saveFattura(this.fatturaCopy).subscribe(res => console.log(res))
    console.log(this.fatturaCopy)
  }

}
