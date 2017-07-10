import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CharacterSheet} from './../../pages/character-sheet/character-sheet'
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public afAuth:AngularFireAuth ,public navCtrl: NavController) {

  }

  goCharacterSheet(){
     this.navCtrl.setRoot(CharacterSheet);
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
