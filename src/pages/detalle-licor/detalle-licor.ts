import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleLicorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { LicorProvider } from '../../providers/licor/licor';
@IonicPage()
@Component({
  selector: 'page-detalle-licor',
  templateUrl: 'detalle-licor.html',
})
export class DetalleLicorPage {
  public id:number;
  public detalles:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataLicor:LicorProvider) {
    this.id=this.navParams.get('id');
    this.detalles=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleLicorPage');
    this.getDetalleLicor(this.id);
  }

  getDetalleLicor(id){
    this.dataLicor.getDatalleLicor(id).subscribe(data=>{
    console.log(data[0]);
    this.detalles=data[0];
    });
  }//fin de GetdetalleLicor

}
