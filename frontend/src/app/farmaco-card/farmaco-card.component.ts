import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { farmaco } from '../model/farmaco';
import { FarmacoService } from '../services/farmaco.service';

@Component({
  selector: 'app-farmaco-card',
  templateUrl: './farmaco-card.component.html',
  styleUrls: ['./farmaco-card.component.css']
})
export class FarmacoCardComponent implements OnInit {

  @Input()
  farmaco: farmaco;

  @Input()
  index: number;

  constructor(private FarmacoService: FarmacoService,private router: Router) {}

  ngOnInit(): void {
    console.log(this.farmaco);
  }



  deleteFarmaco(name : string){
    name = this.farmaco.name;
    this.FarmacoService.deleteFarmaco(name).subscribe(res => {
      this.router.navigateByUrl('/farmaco/all');
    });

  }

}
