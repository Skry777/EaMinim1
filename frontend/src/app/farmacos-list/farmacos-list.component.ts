import { ActivatedRoute } from '@angular/router';
import { FarmacoService } from './../services/farmaco.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { farmaco } from '../model/farmaco';

@Component({
  selector: 'app-farmacos-list',
  templateUrl: './farmacos-list.component.html',
  styleUrls: ['./farmacos-list.component.css']
})

export class FarmacosListComponent implements OnInit {

  farmacos: farmaco[];

  constructor(public farmacoService: FarmacoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.farmacoService.getFarmacos().subscribe (farmacos => {
      this.farmacos = farmacos;
    });
  }

}
