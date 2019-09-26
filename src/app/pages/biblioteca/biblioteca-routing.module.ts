import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { AutoresComponent } from './autores/autores.component';
import { EditorialComponent } from './editorial/editorial.component';
import { LibroComponent } from './libro/libro.component';
import { TipoComponent } from './tipo/tipo.component';
import { ExistenciasComponent } from './existencias/existencias.component';


const routes: Routes = [
  {
    path: 'areas',
    component: AreasComponent
  },
  {
    path: 'autores',
    component: AutoresComponent
  },
  {
    path: 'editorial',
    component: EditorialComponent
  },
  {
    path: 'libro',
    component: LibroComponent
  },
  {
    path: 'tipo',
    component: TipoComponent
  },
  {
    path: 'existencias',
    component: ExistenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
