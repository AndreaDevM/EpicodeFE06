import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { ComuniService } from '../services/comuni.service';

@Component({
  selector: 'app-comuni',
  templateUrl: './comuni.component.html',
  styleUrls: ['./comuni.component.css']
})
export class ComuniComponent implements OnInit {

  comuni: Comune[] = []
  newComune: Comune = new Comune();

  constructor(private comuniService: ComuniService,
    private router: Router) { }

  ngOnInit(): void {
    this.comuniService.getAllComuni().subscribe(data => this.comuni = data.content)
  }

  addComune() {
    this.comuniService.addComune(this.newComune).subscribe(response => console.log(response))
    this.newComune = this.newComune;
  }

}
