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

  public tipo_licor:any;
  public estado_licor:string;
  public tipo__envace_licor:string;
  
  public nombre:string;  
  public peso_total:number;
  public pero_util:number;
  public shots:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataLicor:LicorProvider,public toastCtrl: ToastController) {
    this.tipos_licor=[];
    this.tipos_licor= this.navParams.get('tipos_licor');
    this.shots=0;
    this.pero_util=0;
    this.peso_total=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarNuevoLicorPage');
  }
  cantidadShots(){
    if(this.tipo__envace_licor=='1'){
      this.shots=this.pero_util/40;
    }else{
      this.shots=this.pero_util/18;
    }
  }// fin de cantidad shots
  agregarLicor(){
    // alert(this.tipo_licor);
    // alert(this.estado_licor);
    // alert(this.tipo__envace_licor);
    // alert(this.nombre);
    // alert(this.peso_total);
    // alert(this.pero_util);
   
    
      let toast = this.toastCtrl.create({
        message: 'Licor agregado exitosamente',
        duration: 3000
      });
      toast.present();
    this.dataLicor.postAgregarLicor(
      this.tipo_licor,
      this.estado_licor,
      this.tipo__envace_licor,
      this.nombre,
      this.peso_total,
      this.pero_util
    ).subscribe(data=>{
      console.log(data);
    });
  }

}
