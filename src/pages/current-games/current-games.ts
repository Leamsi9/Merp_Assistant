import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AF } from './../../providers/af';
import { UserProvider } from './../../providers/user/user';
import { PlayingTabsPage } from '../../pages/playing-tabs/playing-tabs';


export interface GAME{
  gameMaster : string ; 
  gameName:string;
  players : any[];
}
@IonicPage()
@Component({
  selector: 'page-current-games',
  templateUrl: 'current-games.html',
})
export class CurrentGamesPage {
  error;

  gamesList : any;

  public menuIcon: string = this.af.menuIcon ;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private af:AF,private userProvider:UserProvider) {
  this.gamesList= this.af.games
  console.log(this.gamesList)
  }

  selectGame(gameKey:string){
    this.af.currentGame = gameKey;
    let currentUser = this.af.currentUser
    let canPlay=false;

    let players = this.af.getPlayers(gameKey);
     players.forEach(array => {
      array.forEach(element => {
     if(currentUser == element.gameMaster){
        canPlay= true;
      }  
     else 
        if (currentUser==element.playerId){
         this.af.selectedCharacter = this.userProvider.getCharacter(currentUser,element.character)
         canPlay = true;
         console.log(this.af.selectedCharacter)
      }  
      });
    });
    if (canPlay) {
    this.navCtrl.setRoot(PlayingTabsPage);
      
    } else {
      this.error = 'You were not invited to this game'
    }
  }

}
