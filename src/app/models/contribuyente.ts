export class Contribuyente {
    _id?: number;
    nombre: string;
    apellidos: string;
    numDni: string;
    direccion: string;
    sueldoBase: number;

    constructor(nombre: string, apellidos: string, numDni:string, direccion: string, sueldoBase: number ){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.numDni = numDni;
        this.direccion = direccion;
        this.sueldoBase = sueldoBase;
    }
}