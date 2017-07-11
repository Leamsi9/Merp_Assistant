import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { AF } from './../providers/af';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CharacterSheet} from '../pages/character-sheet/character-sheet';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  isBrowser:any;

  constructor(public platform: Platform,public afAuth:AngularFireAuth, public statusBar: StatusBar, public splashScreen: SplashScreen,private af:AF ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'ChacarterSheet', component: CharacterSheet }
    ];
    const authObserver = afAuth.authState.subscribe( user => {
      if (user && af.currentUser!=null) {
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      } else {
        this.rootPage = LoginPage;
        authObserver.unsubscribe();
      }
    });
    var deviceInformation = platform.getActiveElement();
    if (deviceInformation.localName === "browser"){
        this.isBrowser = true;
      }else{
        this.isBrowser = false;
      }
}
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    this.afAuth.auth.signOut();
    this.nav.setRoot(LoginPage);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
