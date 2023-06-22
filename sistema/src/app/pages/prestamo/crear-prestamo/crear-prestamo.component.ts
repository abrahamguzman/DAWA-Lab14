import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Prestamo } from 'src/app/models/prestamo';
import { PrestamoService } from 'src/app/services/prestamo.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-prestamo',
  templateUrl: './crear-prestamo.component.html',
  styleUrls: ['./crear-prestamo.component.css']
})
export class CrearPrestamoComponent {
  prestamoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _prestamoService: PrestamoService){
    this.prestamoForm = this.fb.group({
        socio:  ['', Validators.required],
        pelicula: ['', Validators.required]
    })
  }

  agregarPrestamo(){

    const PRESTAMO: Prestamo = {
      socio: this.prestamoForm.get('socio')?.value,
      numero_pelicula: this.prestamoForm.get('pelicula')?.value,
    }

    console.log(PRESTAMO)

    Swal.fire({
      title: 'Creacion de Prestamo',
      text: "¿Desea crear el prestamo?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._prestamoService.guardarPrestamo(PRESTAMO).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-prestamos'])
        }) 
      }
    })

    
  }

}
