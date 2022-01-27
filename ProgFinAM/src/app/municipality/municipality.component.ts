import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { Comuni } from '../interfaces/comuni';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.css']
})
export class MunicipalityComponent implements OnInit {

  comune: Comune = new Comune();
  provincia: Provincia []= []
  comuni: Comune[] = [];

  copyMunicipality!: Comune;

  constructor(private comuniService: ComuniService,
    private router: Router,
    private modalService: NgbModal,
    private provinceService: ProvinceService) { }

  ngOnInit(): void {
    this.provinceService.getAllProvince().subscribe(data => this.provincia = data.content);
    this.comuniService.getAllComuni().subscribe(data => this.comuni = data.content)
  }

  addComune(){
    this.comuniService.addComune(this.comune).subscribe(response => console.log(response))

    //this.router.navigate(['/'])
  }

  deleteComune(item: Comune) {
    this.comuniService.deleteComune(item.id).subscribe(data => console.log('Elemento eliminato: ' + data))
  }

  editComune(content: any, item: Comune) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.copyMunicipality = Object.assign({}, item);
  }

  saveChanges() {
    this.comuniService.saveComune(this.copyMunicipality).subscribe(res => console.log(res))
    this.modalService.dismissAll();
  }

}
