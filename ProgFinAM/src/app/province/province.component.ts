import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Provincia } from '../classes/provincia';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  province: Provincia[] = [];

  newProvincia: Provincia = new Provincia();
  copyProvincia!: Provincia;

  constructor(private provinceService: ProvinceService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.provinceService.getAllProvince().subscribe(data => this.province = data.content)
  }

  addProvincia() {
    this.provinceService.addProvincia(this.newProvincia).subscribe(response => console.log(response))
    this.newProvincia = new Provincia();
  }

  deleteProvincia(item: Provincia) {
    this.provinceService.deleteProvincia(item.id).subscribe(data => console.log('Elemento eliminato: ' + data))
  }

  editProvincia(content: any, item: Provincia) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.copyProvincia = Object.assign({}, item);
  }

  saveChanges() {
    this.provinceService.saveProvincia(this.copyProvincia).subscribe(res => console.log(res))
    this.modalService.dismissAll();
  }

}
