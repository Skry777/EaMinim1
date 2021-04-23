import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { farmaco } from '../model/farmaco';

@Injectable({
  providedIn: 'root'
})
export class FarmacoService {

  constructor(private http:HttpClient) { }
  getFarmacos(){
    return this.http.get<farmaco[]>(environment.apiURL + '/farmaco/all');
  }

  addFarmaco(newFarmaco: farmaco) {
    return this.http.post(environment.apiURL + '/farmaco/add', newFarmaco);
  }

  getFarmaco(name: string) {
    return this.http.get(environment.apiURL + '/farmaco/get' + name);
  }

  deleteFarmaco(farmaco: string) {
    return this.http.post(environment.apiURL + '/farmaco/delete' , farmaco);
  }

  
}
