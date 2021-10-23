import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contribuyente } from 'src/app/models/contribuyente';
import { ContribuyenteService } from 'src/app/services/contribuyente.service';

@Component({
  selector: 'app-crear-contribuyente',
  templateUrl: './crear-contribuyente.component.html',
  styleUrls: ['./crear-contribuyente.component.css']
})
export class CrearContribuyenteComponent implements OnInit {
  contribuyenteForm: FormGroup;
  tituloForm = 'Agregar contribuyente';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _contribuyenteService: ContribuyenteService,
    private aRouter: ActivatedRoute) {
    this.contribuyenteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      numDni: ['', Validators.required],
      direccion: ['', Validators.required],
      sueldoBase: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  AgregarContrib() {
    const CONTRIB: Contribuyente = {
      nombre: this.contribuyenteForm.get('nombre')?.value,
      apellidos: this.contribuyenteForm.get('apellidos')?.value,
      numDni: this.contribuyenteForm.get('numDni')?.value,
      direccion: this.contribuyenteForm.get('direccion')?.value,
      sueldoBase: this.contribuyenteForm.get('sueldoBase')?.value,
    }
    if (this.id !== null) {
      //editar
      this._contribuyenteService.editContrib(this.id, CONTRIB).subscribe(data => {
        this.toastr.info('Se actualizaron correctamente los datos', 'Registro actualizado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.contribuyenteForm.reset();
      })
    } else {
      //agregar
      console.log(CONTRIB);
      this._contribuyenteService.saveContrib(CONTRIB).subscribe(data => {
        this.toastr.success('Se guardo correctamente', 'Registro exitoso!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.contribuyenteForm.reset();
      })
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.tituloForm = 'Editar Contribuyente';
      this._contribuyenteService.getContribOne(this.id).subscribe(data => {
        this.contribuyenteForm.setValue({
          nombre: data.nombre,
          apellidos: data.apellidos,
          numDni: data.numDni,
          direccion: data.direccion,
          sueldoBase: data.sueldoBase
        })
      })
    }
  }
}
