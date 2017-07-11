import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterSheet } from './../../pages/character-sheet/character-sheet'
import { AngularFireAuth } from 'angularfire2/auth';
import { AF } from './../../providers/af';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public characters: FirebaseListObservable<any>;

  constructor(public afAuth:AngularFireAuth ,public navCtrl: NavController, private af:AF) {
    this.characters= this.af.getCharacters();
  }

  goCharacterSheet(){
     this.navCtrl.setRoot(CharacterSheet);
  }

  deleteCharacter(char){
    this.af.deleteCharacter(char);
  }

  setSelectedCharacter(character){
    this.af.selectedCharacter = character;
    this.goCharacterSheet();
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
