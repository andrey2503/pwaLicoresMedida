import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LicorProvider } from '../../providers/licor/licor';
import { DetalleLicorPage } from '../detalle-licor/detalle-licor';
import { AgregarNuevoLicorPage } from '../agregar-nuevo-licor/agregar-nuevo-licor';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[LicorProvider]
})
export class HomePage {
  public tipos_licor:any;
  public licores:any;
  constructor(public navCtrl: NavController,public dataLicor:LicorProvider) {
    this.tipos_licor=[];
    this.licores=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
    //this.getLicores();
  }//ionViewDidLoa

  getTiposLicor(){
    this.dataLicor.getListaTipoLicores().subscribe(data=>{
      console.log(data);
      this.tipos_licor=data;
    });
  }// fin de getTiposLicor

  getLicores(){
    this.dataLicor.getListaLicores().subscribe(data=>{
      console.log(data);
      this.licores=data;
    this.getTiposLicor();      
    });
  }// fin de getLicores

  verLicor(id){
    this.navCtrl.push(DetalleLicorPage,{'id':id});
  }// fin de combinar

  nuevoLicor(){
    this.navCtrl.push(AgregarNuevoLicorPage,{'tipos_licor':this.tipos_licor});
  }

  ionViewWillEnter() {
    console.log("llamada en home");
    this.getLicores();
}

}
