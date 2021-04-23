import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FarmacoService } from './services/farmaco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendAngular';

  constructor(public farmacoService: FarmacoService, private router: Router) { }

  getFarmacos(){
    this.router.navigateByUrl('/farmaco/all');
  }
  
  addFarmaco(){
    this.router.navigateByUrl('/farmaco/add');
  }

  getFarmaco(){
    this.router.navigateByUrl('/farmaco/get');
  }

  editFarmaco(){
    this.router.navigateByUrl('/farmaco/edit');
  }

}
