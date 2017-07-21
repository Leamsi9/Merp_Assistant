import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AF } from './../../providers/af';
import { UserProvider } from './../../providers/user/user';
import { FirebaseListObservable} from 'angularfire2/database';
/**
 * Generated class for the CreateGamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-game',
  templateUrl: 'create-game.html',
})
export class CreateGamePage {
  error;

  public games : FirebaseListObservable<any>;

  public gameName : string; 

  public players : any;
 

  private users : FirebaseListObservable<any[]>;

  public menuIcon: string = this.af.menuIcon ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AF, private usersProvideer:UserProvider) {
  
  this.games = this.af.getGames();
  this.users = this.usersProvideer.getAllUsers();

  }

  createGame(){
    if(this.gameName!=null&&this.players!=null){
      let game = {
        gameMaster: this.af.currentUser, 
        gameName:this.gameName,
        players:null
      }
      let gameKey = this.games.push(game).key;
      this.notifyPlayerInvite(this.players,gameKey)
      this.error=null
    }else{
      this.error = 'Game Name and Players cannot be empty'
    }
  }

  notifyPlayerInvite(players:string[],gamekey:string){
      let invites = this.af.getInvites()
    players.forEach(element => {
      let playerInvite = {
        game:gamekey,
        player:element
      }
      invites.push(playerInvite)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateGamePage');
  }

}
