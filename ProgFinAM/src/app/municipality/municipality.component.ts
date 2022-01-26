import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
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

  constructor(private comuniService: ComuniService,
    private router: Router,
    private provinceService: ProvinceService) { }

  ngOnInit(): void {
    this.provinceService.getAllProvince().subscribe(data => this.provincia = data.content);
  }

  addComune(){
    this.comuniService.addComune(this.comune).subscribe(response => console.log(response))

    this.router.navigate(['/'])
  }

}
