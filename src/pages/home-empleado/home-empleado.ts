import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-home-empleado',
  templateUrl: 'home-empleado.html',
})
export class HomeEmpleadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeEmpleadoPage');
  }

  logOut(){
    Cookie.set('alcohol_email',null);
    Cookie.set('alcohol_idrol',null);
    this.navCtrl.setRoot(LoginPage);
    //alert(Cookie.get('alcohol_email'));
  }

}
