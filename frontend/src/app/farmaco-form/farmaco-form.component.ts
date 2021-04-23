import { Component, OnInit } from '@angular/core';
import { FarmacoService } from './../services/farmaco.service';
import { Router } from '@angular/router';
import { farmaco } from '../model/farmaco';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-farmaco-form',
  templateUrl: './farmaco-form.component.html',
  styleUrls: ['./farmaco-form.component.css']
})

export class FarmacoFormComponent implements OnInit {

  farmacoForm: FormGroup;
  isSubmitted = false;


  
  constructor(public farmacoService: FarmacoService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.farmacoForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      descripcion: [''],
      responsable: ['', [Validators.required, Validators.nullValidator]],
      telefono:  ['']
      
    });
  }

  get formControls(){
    return this.farmacoForm.controls;
  }

 submitFarmaco(): void {
    this.isSubmitted = true;
    if(this.farmacoForm.invalid){
      return;
  }

 const name = this.farmacoForm.value.name;
 const descripcion = this.farmacoForm.value.descripcion;
 const responsable = this.farmacoForm.value.responsable;
  const telefono = this.farmacoForm.value.telefono;

  let farmaco = {'name': name, 'descripcion': descripcion, 'responsable': responsable,  'telefono': telefono };




  this.farmacoService.addFarmaco(farmaco).subscribe((farmaco: farmaco) => {
    this.router.navigateByUrl('/farmaco/all');
  });
}
}

