import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  fatture: Fatture[] = [];

  constructor(private fattureService: FattureService,
    private router: Router) { }

  ngOnInit(): void {
    this.fattureService.getAllFatture().subscribe(data => this.fatture = data.content)
  }

}
