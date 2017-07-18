import { Component} from '@angular/core';
import { IonicPage, MenuController, NavController,ModalController} from 'ionic-angular';
import { CharacterSheet } from './../../pages/character-sheet/character-sheet'
import { AngularFireAuth } from 'angularfire2/auth';
import { AF } from './../../providers/af';
import {UserProvider} from   './../../providers/user/user'
import { FirebaseListObservable } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})
export class CharactersPage {
  public characters: FirebaseListObservable<any>;

  public menuIcon: string = this.af.menuIcon ;

  constructor(public afAuth:AngularFireAuth,public menuCtl:MenuController ,public navCtrl: NavController, private af:AF, public modalCrtl:ModalController) {
   this.characters = this.af.getCharacters();
  }


 
  goCharacterSheet(){
     let modal =this.modalCrtl.create(CharacterSheet);
     this.navCtrl.pop();
     modal.present();
  }

  deleteCharacter(char){
    this.af.deleteCharacter(char);
  }

  setSelectedCharacter(character){
    this.af.selectedCharacter = character;
    this.goCharacterSheet();
  }

  goBack(){
    this.navCtrl.pop();
    this.menuCtl.close();
  }

}
