import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AF } from './../../providers/af';
import { FirebaseListObservable} from 'angularfire2/database';
import { CharactersPage} from '../../pages/characters/characters';

/**
 * Generated class for the InvitesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-invites',
  templateUrl: 'invites.html',
})
export class InvitesPage {

  public menuIcon: string = this.af.menuIcon ;

  private playerInvites : FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private af:AF) {
  this.playerInvites = this.af.getPlayerInvites()
  console.log(this.playerInvites)  
  }

  deleteInvite(invite:any){
   this.af.deleteInvite(invite.$key); 
  }

  joinGame(gameKey:string){
    this.af.currentGame = gameKey;
    this.navCtrl.push(CharactersPage)
  }

  getUserIcon(uid){
    return this.af.getProfilePic(uid);
  }

}
