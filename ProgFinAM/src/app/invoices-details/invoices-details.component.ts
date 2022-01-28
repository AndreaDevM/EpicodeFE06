import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-invoices-details',
  templateUrl: './invoices-details.component.html',
  styleUrls: ['./invoices-details.component.css']
})
export class InvoicesDetailsComponent implements OnInit {

  fattura: Fatture = new Fatture();

  constructor(private fattureService: FattureService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.fattureService.getFattureById(data['id']).subscribe(response => this.fattura = response)
      });
  }

  clientDetails(item: Client) {
    this.router.navigate(['client', item.id, 'details']);
  }

}