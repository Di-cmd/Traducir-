import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [


  {
    path: '',
    component: LayoutComponent,
    children:[
        {
          path: '',
          loadChildren: () => import('../prueba/prueba.module').then(m => m.PruebaModule)
        }
    ]

  },

  {path: 'formulario',
  component: FormularioComponent,

  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
