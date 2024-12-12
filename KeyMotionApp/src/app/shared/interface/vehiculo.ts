export interface Vehiculo {
    idVehiculo: number;
    marca: string;
    modelo: string;
    anio: number;
    precio: number;
    tipoCombustible: string;
    transmision: string;
    kilometraje: number;
    descripcion: string;
    imagenes: string[];
    estado: string
    fechaPublicacion: string;
    comentarios: any[];
    transacciones: any[];
  }
  