import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';

/**
 * Generated class for the AgregarNuevoLicorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { LicorProvider } from '../../providers/licor/licor';
@IonicPage()
@Component({
  selector: 'page-agregar-nuevo-licor',
  templateUrl: 'agregar-nuevo-licor.html',
  providers:[LicorProvider]
})
export class AgregarNuevoLicorPage {
  public tipos_licor:any;
  public nombre:string;
  public tipo_licor:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataLicor:LicorProvider,public toastCtrl: ToastController) {
    this.tipos_licor=[];
    this.tipos_licor= this.navParams.get('tipos_licor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarNuevoLicorPage');
  }

  agregarLicor(){
    alert(this.tipo_licor);
    alert(this.nombre);
      let toast = this.toastCtrl.create({
        message: 'Licor agregado exitosamente',
        duration: 3000
      });
      toast.present();
    this.dataLicor.postAgregarLicor(this.tipo_licor,this.nombre).subscribe(data=>{
      console.log(data);
    });
  }

}
