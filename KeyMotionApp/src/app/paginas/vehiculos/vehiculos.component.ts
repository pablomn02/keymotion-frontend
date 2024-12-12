import { Component } from '@angular/core';
import { Vehiculo } from 'src/app/shared/interface/vehiculo';
import { VehiculoService } from 'src/app/shared/services/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent {

  public listaVehiculos: any[] = []

  constructor(private vehiculosService: VehiculoService){
    vehiculosService.getVehiculos().subscribe({
      next: (data) => {
        this.listaVehiculos = data
        // ForEach para guardar las imagenes de cada coche
        this.listaVehiculos.forEach(vehiculo => {
          if(vehiculo.imagenes){
            vehiculo.imagenes = JSON.parse(vehiculo.imagenes)
          }
        })
        console.log(data)
      },
      error: (err) => console.error("Error al cargar los vehiculos", err)
    })
  }
}
