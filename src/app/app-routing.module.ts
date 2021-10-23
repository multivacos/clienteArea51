import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearContribuyenteComponent } from './components/crear-contribuyente/crear-contribuyente.component';
import { ListarContribuyentesComponent } from './components/listar-contribuyentes/listar-contribuyentes.component';

const routes: Routes = [
  { path: '', component: ListarContribuyentesComponent },
  { path: 'crear-contribuyente', component: CrearContribuyenteComponent },
  { path: 'editar-contribuyente/:id', component: CrearContribuyenteComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
