import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarTipoLicorPage } from './agregar-tipo-licor';

@NgModule({
  declarations: [
    AgregarTipoLicorPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarTipoLicorPage),
  ],
})
export class AgregarTipoLicorPageModule {}
