import { Component, OnInit  } from '@angular/core';

import { Prestamo } from 'src/app/models/prestamo';
import { PrestamoService } from 'src/app/services/prestamo.service';
import Swal from 'sweetalert2'
import { ReporteService } from 'src/app/services/reporte.service';

@Component({
  selector: 'app-listar-prestamo',
  templateUrl: './listar-prestamo.component.html',
  styleUrls: ['./listar-prestamo.component.css']
})
export class ListarPrestamoComponent {

  listPrestamos: Prestamo[] = [];
  elementos: number = 0;
  
  
  constructor(private _prestamoService: PrestamoService) {

  }
  
  ngOnInit(): void {
    
    this.obtenerPrestamos();

  }

  obtenerPrestamos(){
    this._prestamoService.getPrestamos().subscribe(data => {
      console.log(data);
      this.listPrestamos = data;
      this.elementos = this.listPrestamos.length;
    })
  }
  generarPDF(){
    console.log('funciona');
    
    this._prestamoService.getPDF().subscribe(response => {
      const file = new Blob([response], { type: 'application/pdf' });

      const url = URL.createObjectURL(file);
      window.open(url)

      const a = document.createElement('a');
      a.href = url;
      a.download = 'Lab13.pdf';

      document.body.appendChild(a);
      a.click();

      URL.revokeObjectURL(url);
      document.body.removeChild(a);

    },)
    
  }

  eliminarPrestamo(id: any){
    this._prestamoService.deletePrestamo(id).subscribe(data => {

      Swal.fire({
        title: 'Eliminacion de Prestamo',
        text: "¿Desea eliminar el prestamo?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerPrestamos();
          this.elementos = this.listPrestamos.length;
        }
      })
    })
  }

}
