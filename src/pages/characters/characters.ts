import { Component} from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AF } from './../../providers/af';
import { FirebaseListObservable } from 'angularfire2/database';
import { PlayingTabsPage } from '../../pages/playing-tabs/playing-tabs';
import { CurrentGamesPage} from '../../pages/current-games/current-games';



@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})
export class CharactersPage {
  public characters: FirebaseListObservable<any>;

  public menuIcon: string = this.af.menuIcon ;

  constructor(public afAuth:AngularFireAuth ,public navCtrl: NavController, private af:AF, ) {
   this.characters = this.af.getCharacters();
  }

  goPlayingPages(){
    this.navCtrl.setRoot(PlayingTabsPage)
  }

  deleteCharacter(char){
    this.af.deleteCharacter(char);
  }

  setSelectedCharacter(character){
    this.af.selectedCharacter = character;
   // this.af.setCharacterInCurrentGame();
    this.goPlayingPages();
  }

  goBack(){
    this.navCtrl.setRoot(CurrentGamesPage)
  }

}
