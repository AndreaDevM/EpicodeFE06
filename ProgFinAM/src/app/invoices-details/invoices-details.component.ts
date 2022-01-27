import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.fattureService.getFattureById(data['id']).subscribe(response => this.fattura = response)
      });
  }

}