import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeEmpleadoPage } from './home-empleado';

@NgModule({
  declarations: [
    HomeEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeEmpleadoPage),
  ],
})
export class HomeEmpleadoPageModule {}
