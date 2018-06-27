import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

/*
  Generated class for the LicorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
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
    return this.http.get(this.ruta+'alcoholmedida/public/api/licor_detalle/'+id);
  }// fin de getDetalleLicor

  postAgregarLicor(tipo_licor,estado_licor,tipo__envace_licor,nombre,peso_total,pero_util){
    return this.http.post(this.ruta+'alcoholmedida/public/api/agregarLicor',
    {
      'tipo_licor':tipo_licor,
      'estado_licor':estado_licor,
      'tipo__envace_licor':tipo__envace_licor,
      'nombre':nombre,
      'peso_total':peso_total,
      'pero_util':pero_util
    
    }, httpOptions)
    .pipe();
  }

}
