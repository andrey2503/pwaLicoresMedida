import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetalleLicorPage } from '../pages/detalle-licor/detalle-licor';
import { AgregarNuevoLicorPage } from '../pages/agregar-nuevo-licor/agregar-nuevo-licor';
import { LicorProvider } from '../providers/licor/licor';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HomeEmpleadoPage } from '../pages/home-empleado/home-empleado';
import { AgregarTipoLicorPage } from '../pages/agregar-tipo-licor/agregar-tipo-licor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalleLicorPage,
    AgregarNuevoLicorPage,
    HomeEmpleadoPage,
    AgregarTipoLicorPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalleLicorPage,
    AgregarNuevoLicorPage,
    HomeEmpleadoPage,
    AgregarTipoLicorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LicorProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
