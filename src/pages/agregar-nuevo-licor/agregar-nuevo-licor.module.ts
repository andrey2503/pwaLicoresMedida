import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarNuevoLicorPage } from './agregar-nuevo-licor';

@NgModule({
  declarations: [
    AgregarNuevoLicorPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarNuevoLicorPage),
  ],
})
export class AgregarNuevoLicorPageModule {}
