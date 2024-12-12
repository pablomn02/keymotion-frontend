import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../interface/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  public url = "http://localhost:8080/vehiculos"

  constructor(private httpClient: HttpClient) { }

  getVehiculos(): Observable<Vehiculo[]>{
    return this.httpClient.get<Vehiculo[]>(this.url)
  }
}
