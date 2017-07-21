import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AF } from './../../providers/af';
import { UserProvider } from './../../providers/user/user';
import { FirebaseListObservable} from 'angularfire2/database';
import { CharactersPage} from '../../pages/characters/characters';

/**
 * Generated class for the CurrentGamesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-current-games',
  templateUrl: 'current-games.html',
})
export class CurrentGamesPage {

  gamesList : FirebaseListObservable<any>;

  public menuIcon: string = this.af.menuIcon ;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private af:AF,private userProvider:UserProvider) {
  this.gamesList=this.af.getGames();
  }

  selectGame(game:string){
    this.af.currentGame = game;
    this.navCtrl.setRoot(CharactersPage);
  }

}
