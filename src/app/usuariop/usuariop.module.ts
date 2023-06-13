import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariopCreateComponent } from './usuariop-create/usuariop-create.component';
import { UsuariopListComponent } from './usuariop-list/usuariop-list.component';
import { UsuariopDetailsComponent } from './usuariop-details/usuariop-details.component';
import { UsuariopEditComponent } from './usuariop-edit/usuariop-edit.component';
import { UsuariopRoutingModule } from './usuariop-routing.module';



@NgModule({
  declarations: [
    UsuariopCreateComponent,
    UsuariopListComponent,
    UsuariopDetailsComponent,
    UsuariopEditComponent
  ],
  imports: [
    CommonModule,
    UsuariopRoutingModule
  ]
})
export class UsuariopModule { }
