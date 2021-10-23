import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Contribuyente } from 'src/app/models/contribuyente';
import { ContribuyenteService } from 'src/app/services/contribuyente.service';

@Component({
  selector: 'app-listar-contribuyentes',
  templateUrl: './listar-contribuyentes.component.html',
  styleUrls: ['./listar-contribuyentes.component.css']
})
export class ListarContribuyentesComponent implements OnInit {
  listContrib: Contribuyente[] = [];
  constructor(private _contribuyenteService: ContribuyenteService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerContrib();
  }

  obtenerContrib() {
    this._contribuyenteService.getContrib().subscribe(data => {
      console.log(data);
      this.listContrib = data;
    }, error => {
      console.log(error);
    })
  }

  delContrib(id: any){
    this._contribuyenteService.delContrib(id).subscribe(data => {
      this.toastr.error('El contribuyente fue eliminado con exito!', 'Contribuyente eliminado')
      this.obtenerContrib();
    }, error => {
      console.log(error);
    })
  }

}
