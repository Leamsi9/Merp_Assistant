import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterSheet } from './../../pages/character-sheet/character-sheet'
import { CharactersPage } from './../../pages/characters/characters'
import { AngularFireAuth } from 'angularfire2/auth';
import { AF } from './../../providers/af';
import {UserProvider} from   './../../providers/user/user'
import { FirebaseListObservable } from 'angularfire2/database';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  public menuIcon: string = this.af.menuIcon ;

  public characters: FirebaseListObservable<any>;

  constructor(public modalCtrl:ModalController ,public afAuth:AngularFireAuth ,public navCtrl: NavController, private af:AF, public userProvider:UserProvider) {
  
  }
 
  goCharacterSheet(){
    let modal = this.modalCtrl.create(CharacterSheet);
     modal.present();
  }
  goCharactersPage(){
     let modal = this.modalCtrl.create(CharactersPage);
     modal.present();
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
