import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, Loading,AlertController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { HomePage } from '../home/home';
import { HomeEmpleadoPage } from '../home-empleado/home-empleado';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rootPage:any = HomePage;
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  constructor(public navCtrl: NavController, public navParams: NavParams,private auth: AuthServiceProvider,private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    // alert(Cookie.get('alcohol_email'));
    if(Cookie.get('alcohol_email')!='null'){
      if(Cookie.get('alcohol_idrol') === '1' ){
      this.navCtrl.setRoot(HomePage); 
      }else if (Cookie.get('alcohol_idrol') === '2') {
      this.navCtrl.setRoot(HomeEmpleadoPage); 
      }
    }else{
      
    }
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      // alert(allowed.acceso);
      // console.log(allowed);
      if (allowed.acceso) {
        if(allowed.idrol==1){
          this.navCtrl.setRoot(HomePage); 
        } else if(allowed.idrol==2){
          this.navCtrl.setRoot(HomeEmpleadoPage); 
        }
            // Cookie.set('cookieName', 'cookieValue')
            // let myCookie = Cookie.get('cookieName');
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
