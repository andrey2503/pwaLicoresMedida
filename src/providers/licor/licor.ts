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
    return this.http.get(this.ruta+'alcoholmedida/public/api/licor/'+id);
  }// fin de getDetalleLicor

  postAgregarLicor(fk_tipolicor,nombre){
    return this.http.post(this.ruta+'alcoholmedida/public/api/agregarLicor/',{'fk_tipolicor':fk_tipolicor,'nombre':nombre}, httpOptions)
    .pipe();
  }

}
