export class Prestamo {

    _id?: string;
    socio: string;
    fecha: Date;
    numero_pelicula: number;


    constructor(socio:string, fecha:Date, numero_pelicula: number){
        this.socio = socio;
        this.fecha = fecha;
        this.numero_pelicula = numero_pelicula;
    }

}