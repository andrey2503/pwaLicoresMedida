import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the AgregarTipoLicorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { LicorProvider } from '../../providers/licor/licor';

@IonicPage()
@Component({
  selector: 'page-agregar-tipo-licor',
  templateUrl: 'agregar-tipo-licor.html',
  providers:[LicorProvider],  
})
export class AgregarTipoLicorPage {
  public nombre:string;  
  constructor(public navCtrl: NavController,
       public navParams: NavParams,
       public dataLicor:LicorProvider,
       public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarTipoLicorPage');
  }

  agregarTipoLicor(){
    this.dataLicor.postAgregarTipoLicor(this.nombre).subscribe(data=>{
      if(data==1){
        let toast = this.toastCtrl.create({
          message: 'Tipo Licor agregado exitosamente',
          duration: 3000
        });
        toast.present();
      }else{
        let toast = this.toastCtrl.create({
          message: 'Error agregar',
          duration: 3000
        });
        toast.present();
      }
    });
  }//agregarTipoLicor

}
