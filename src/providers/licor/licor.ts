import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LicorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LicorProvider {
  public ruta:string;
  constructor(public http: HttpClient) {
    console.log('Hello LicorProvider Provider');
    this.ruta="/API/";
  }

  getListaTipoLicores(){
    return this.http.get(this.ruta+'alcoholmedida/public/api/tipos_licor');
  }// fin de getListaLicores

  getListaLicores(){
    return this.http.get(this.ruta+'alcoholmedida/public/api/licores');
  }// fin de getListaLicores

  getDatalleLicor(id){
    return this.http.get(this.ruta+'alcoholmedida/public/api/licor/'+id);
  }// fin de getDetalleLicor

}
